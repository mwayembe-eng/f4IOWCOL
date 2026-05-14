#!/usr/bin/env python3
from pathlib import Path

path = Path("index.html")
if not path.exists():
    raise SystemExit("index.html introuvable. Mets ce script dans le même dossier que ton index.html.")

html = path.read_text(encoding="utf-8")

replacements = {
    '<title>MonDash Radio</title>': '<title>F4IOW · Mission Dashboard</title>',
    '<meta name="description" content="MonDash Radio - Tableau de bord radioamateur personnalisé" />':
    '<meta name="description" content="F4IOW — Mission Dashboard — Colmar, France — JN38QB — DX Elite Station." />',
    'Copyright (c) 2026 Jean Dupont, F4XYZ': 'Copyright (c) 2026 Jean-Maurice Mwayembe, F4IOW',
    'Jean Dupont, F4XYZ': 'Jean-Maurice Mwayembe, F4IOW',
    'MonDash Radio': 'F4IOW Mission Dashboard',
    'topBarCenterText: "CALLSIGN - Locator",':
    'topBarCenterText: "F4IOW · COLMAR · JN38QB · DX ELITE STATION",',
    'window.topBarCenterText = "Utilisez \\\'Configuration\\\' pour personnaliser votre F4IOW Mission Dashboard";':
    'window.topBarCenterText = "F4IOW · COLMAR · JN38QB · DX ELITE STATION";',
    'window.topBarCenterText = "Utilisez \\\'Configuration\\\' pour personnaliser votre MonDash Radio";':
    'window.topBarCenterText = "F4IOW · COLMAR · JN38QB · DX ELITE STATION";',
    '<h1>Configuration de F4IOW Mission Dashboard</h1>':
    '<h1>Configuration F4IOW Mission Dashboard</h1>',
    '<h1>Configuration de MonDash Radio</h1>':
    '<h1>Configuration F4IOW Mission Dashboard</h1>',
}

for old, new in replacements.items():
    html = html.replace(old, new)

backup = Path("index_backup_avant_f4iow.html")
backup.write_text(path.read_text(encoding="utf-8"), encoding="utf-8")
path.write_text(html, encoding="utf-8")

print("OK : index.html personnalisé F4IOW.")
print("Sauvegarde créée :", backup)
