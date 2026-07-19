# MyFamily PWA — Instructions déploiement NAS Synology

## Architecture à déposer sur le NAS

```
/volume1/web/myfamily/
  ├── index.html        ← application principale
  ├── manifest.json     ← métadonnées PWA
  ├── sw.js             ← service worker (cache offline)
  └── icons/
      ├── icon-72.png
      ├── icon-96.png
      ├── icon-128.png
      ├── icon-144.png
      ├── icon-152.png
      ├── icon-192.png
      ├── icon-384.png
      └── icon-512.png
```

## Accès depuis le téléphone

http://[IP_NAS]/myfamily/

## Installer comme app (Android Chrome)

1. Ouvrir Chrome sur le téléphone
2. Aller sur http://[IP_NAS]/myfamily/
3. Menu ⋮ → "Ajouter à l'écran d'accueil"
4. Confirmer → icône MyFamily sur le bureau
