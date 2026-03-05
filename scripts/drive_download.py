#!/usr/bin/env python3
"""Download My Gift Academy image stills from MindSpa Google Drive."""

import os
import sys
import requests

CLIENT_FILE = "/home/luisj/.env.google"
TOKEN_FILE = "/home/luisj/.env.google.tokens.3"

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "public", "assets", "originals")

FILES = {
    "hero-corridor.tif": "1bo6Xfr9x9GZVhpyVkDkrXDqAQGYmtKjt",
    "manifesto-clock.tif": "1wKTomgHo22tOfYATNP9M5FLFkLh7oVos",
    "manifesto-figure.tif": "1qTVf1_rvkY_D2C-IrPp9WH7bB4H6iEeG",
    "journey-desert.tif": "1VIF92ZgZjTNQh_s8mt6hYGJULne6HynO",
    "problem-overwhelm.tif": "1wgmI6YnQfclbw91dLJCIFuwfiB1Jr1ar",
    "intimate-closeup.tif": "19ISRg3iDdnzPvICVhcYZnEdhk6lN63t8",
}


def load_env(path):
    env = {}
    with open(path) as f:
        for line in f:
            line = line.strip()
            if "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                env[k.strip()] = v.strip().strip('"')
    return env


def get_access_token():
    client = load_env(CLIENT_FILE)
    tokens = load_env(TOKEN_FILE)
    resp = requests.post("https://oauth2.googleapis.com/token", data={
        "client_id": client["GOOGLE_CLIENT_ID"],
        "client_secret": client["GOOGLE_CLIENT_SECRET"],
        "refresh_token": tokens["GOOGLE_REFRESH_TOKEN"],
        "grant_type": "refresh_token",
    })
    resp.raise_for_status()
    return resp.json()["access_token"]


def download_file(file_id, dest, token):
    url = f"https://www.googleapis.com/drive/v3/files/{file_id}?alt=media"
    resp = requests.get(url, headers={"Authorization": f"Bearer {token}"}, stream=True)
    if resp.status_code != 200:
        print(f"  ERROR {resp.status_code}: {resp.text[:500]}")
        return False
    with open(dest, "wb") as f:
        for chunk in resp.iter_content(chunk_size=1024 * 1024):
            f.write(chunk)
    size = os.path.getsize(dest)
    if size < 1000:
        print(f"  WARNING: file is only {size} bytes — may be an error page")
        return False
    print(f"  OK — {size:,} bytes")
    return True


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print("Refreshing access token...")
    token = get_access_token()
    print("Token obtained.\n")

    ok = True
    for name, file_id in FILES.items():
        dest = os.path.join(OUTPUT_DIR, name)
        print(f"Downloading {name} ({file_id})...")
        if not download_file(file_id, dest, token):
            ok = False

    if not ok:
        print("\nSome downloads failed. Check errors above.")
        sys.exit(1)
    else:
        print("\nAll downloads complete.")


if __name__ == "__main__":
    main()
