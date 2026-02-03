// ProbePad - Internationalization

const translations = {
  en: {
    // Nav
    "nav.support": "Support",
    "nav.privacy": "Privacy",

    // Hero
    "hero.title": "Test REST APIs on iPhone & iPad",
    "hero.subtitle": "ProbePad is a powerful, privacy-focused API testing app. Build requests, organize collections, and debug responses — all from your pocket.",
    "hero.cta": "Download on App Store",
    "hero.badge.privacy": "100% Private",
    "hero.badge.offline": "Works Offline",
    "hero.badge.pro": "PRO Features",

    // Features
    "features.title": "Everything You Need",
    "features.subtitle": "Professional API testing tools, designed for mobile.",
    "features.requests.title": "HTTP Requests",
    "features.requests.desc": "GET, POST, PUT, PATCH, DELETE with full header and body control.",
    "features.collections.title": "Collections",
    "features.collections.desc": "Organize requests into folders. Keep your workspace tidy.",
    "features.environments.title": "Environments",
    "features.environments.desc": "Switch between dev, staging, and production with one tap.",
    "features.vault.title": "Secrets Vault",
    "features.vault.desc": "Store API keys securely with Face ID / Touch ID protection.",
    "features.history.title": "Response History",
    "features.history.desc": "Compare responses with JSON diff. Track changes over time.",
    "features.import.title": "Import & Export",
    "features.import.desc": "Import from Postman. Export to cURL. Work seamlessly.",

    // Screenshots
    "screenshots.title": "See It in Action",
    "screenshots.placeholder": "Screenshot",

    // What's New
    "whatsnew.title": "What's New",
    "whatsnew.item1.title": "Cleaner Interface",
    "whatsnew.item1.desc": "Subtle borders and collapsible sections reduce visual noise.",
    "whatsnew.item2.title": "Sticky Execute Button",
    "whatsnew.item2.desc": "Always visible while scrolling through long requests.",
    "whatsnew.item3.title": "Request List Improvements",
    "whatsnew.item3.desc": "See URL host, status codes, and relative timestamps at a glance.",
    "whatsnew.item4.title": "New Localizations",
    "whatsnew.item4.desc": "Now available in German, Spanish, and Japanese.",

    // Download
    "download.title": "Ready to Get Started?",
    "download.subtitle": "Download ProbePad and start testing APIs today.",

    // Footer
    "footer.support": "Support",
    "footer.privacy": "Privacy Policy",
    "footer.copyright": "© 2026 Olof Petterson. All rights reserved.",

    // Support Page
    "support.title": "Support",
    "support.subtitle": "Get help with ProbePad",
    "support.faq.title": "Frequently Asked Questions",
    "support.faq.q1": "How do I create my first API request?",
    "support.faq.a1": "Tap the + button on the main screen, enter your API URL, select the HTTP method, and tap Execute. Your response will appear below.",
    "support.faq.q2": "How do I import from Postman?",
    "support.faq.a2": "Export your Postman collection as JSON v2.1, then in ProbePad go to Settings > Import > select your file. Your requests and folders will be imported.",
    "support.faq.q3": "Where are my secrets stored?",
    "support.faq.a3": "All secrets are encrypted and stored in the iOS Keychain, protected by your device's Secure Enclave. They never leave your device.",
    "support.faq.q4": "How do I use environment variables?",
    "support.faq.a4": "Create an environment in Settings > Environments, add your variables (e.g., {{baseUrl}}), then use them in your requests. Switch environments from the top bar.",
    "support.faq.q5": "What's included in PRO?",
    "support.faq.a5": "PRO unlocks unlimited requests, collections, environments, response history, and removes all limits. One subscription works across all your devices.",
    "support.faq.q6": "Does ProbePad sync across devices?",
    "support.faq.a6": "Yes! Enable iCloud Sync in Settings to keep your requests, collections, and environments synchronized across all your Apple devices.",
    "support.troubleshooting.title": "Troubleshooting",
    "support.troubleshooting.item1.title": "Request times out",
    "support.troubleshooting.item1.desc": "Check your internet connection and verify the API endpoint is correct. Some APIs may have rate limiting.",
    "support.troubleshooting.item2.title": "Can't access Secrets Vault",
    "support.troubleshooting.item2.desc": "Ensure Face ID / Touch ID is enabled in your device settings. You can also use your device passcode as fallback.",
    "support.troubleshooting.item3.title": "Import failed",
    "support.troubleshooting.item3.desc": "Make sure your Postman export is in Collection v2.1 format. Other formats are not currently supported.",
    "support.contact.title": "Still Need Help?",
    "support.contact.desc": "We're here to help. Send us an email and we'll get back to you.",
    "support.contact.email": "Contact Support",
    "support.version": "Current Version",

    // Privacy Page
    "privacy.title": "Privacy Policy",
    "privacy.subtitle": "Your data stays on your device",
    "privacy.updated": "Last updated: February 2026",
    "privacy.highlights.local": "Local Storage Only",
    "privacy.highlights.notrack": "No Tracking",
    "privacy.highlights.encrypted": "Encrypted Secrets",
    "privacy.highlights.control": "You're in Control",
    "privacy.intro": "ProbePad is designed with privacy as a core principle. We believe your API testing data is yours alone.",
    "privacy.collection.title": "Data Collection",
    "privacy.collection.content": "ProbePad does not collect, transmit, or store any of your data on external servers. All information you enter — including API requests, responses, collections, environments, and secrets — remains exclusively on your device.",
    "privacy.storage.title": "Data Storage",
    "privacy.storage.content": "Your data is stored locally using Apple's SwiftData framework. Sensitive information such as API keys and tokens are encrypted and stored in the iOS Keychain, protected by your device's Secure Enclave.",
    "privacy.storage.icloud": "If you enable iCloud Sync, your data (excluding secrets) is synchronized through your personal iCloud account. This is entirely optional and can be disabled at any time in Settings.",
    "privacy.thirdparty.title": "Third-Party Services",
    "privacy.thirdparty.content": "ProbePad does not integrate any third-party analytics, advertising, or tracking services. The only network requests made by the app are the API requests you explicitly create and execute.",
    "privacy.thirdparty.appstore": "We use Apple's App Store for distribution and subscription management. Apple's privacy policy governs their handling of purchase data.",
    "privacy.rights.title": "Your Rights",
    "privacy.rights.content": "Since all data is stored locally on your device, you have complete control:",
    "privacy.rights.item1": "Export your data at any time via cURL export",
    "privacy.rights.item2": "Delete individual requests, collections, or environments",
    "privacy.rights.item3": "Delete all app data by uninstalling the app",
    "privacy.rights.item4": "Disable iCloud Sync to keep data on a single device",
    "privacy.children.title": "Children's Privacy",
    "privacy.children.content": "ProbePad is not directed at children under 13. We do not knowingly collect any information from children.",
    "privacy.changes.title": "Changes to This Policy",
    "privacy.changes.content": "We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the \"Last updated\" date.",
    "privacy.contact.title": "Contact Us",
    "privacy.contact.content": "If you have any questions about this privacy policy, please contact us:"
  },

  de: {
    // Nav
    "nav.support": "Support",
    "nav.privacy": "Datenschutz",

    // Hero
    "hero.title": "REST-APIs auf iPhone & iPad testen",
    "hero.subtitle": "ProbePad ist eine leistungsstarke, datenschutzorientierte API-Test-App. Erstelle Anfragen, organisiere Sammlungen und analysiere Antworten — alles aus der Tasche.",
    "hero.cta": "Im App Store laden",
    "hero.badge.privacy": "100% Privat",
    "hero.badge.offline": "Offline nutzbar",
    "hero.badge.pro": "PRO-Funktionen",

    // Features
    "features.title": "Alles was du brauchst",
    "features.subtitle": "Professionelle API-Test-Tools, entwickelt für Mobile.",
    "features.requests.title": "HTTP-Anfragen",
    "features.requests.desc": "GET, POST, PUT, PATCH, DELETE mit voller Header- und Body-Kontrolle.",
    "features.collections.title": "Sammlungen",
    "features.collections.desc": "Organisiere Anfragen in Ordnern. Halte deinen Arbeitsbereich aufgeräumt.",
    "features.environments.title": "Umgebungen",
    "features.environments.desc": "Wechsle mit einem Tipp zwischen Dev, Staging und Produktion.",
    "features.vault.title": "Geheimnis-Tresor",
    "features.vault.desc": "Speichere API-Schlüssel sicher mit Face ID / Touch ID Schutz.",
    "features.history.title": "Antwortverlauf",
    "features.history.desc": "Vergleiche Antworten mit JSON-Diff. Verfolge Änderungen über Zeit.",
    "features.import.title": "Import & Export",
    "features.import.desc": "Importiere von Postman. Exportiere als cURL. Arbeite nahtlos.",

    // Screenshots
    "screenshots.title": "Sieh es in Aktion",
    "screenshots.placeholder": "Screenshot",

    // What's New
    "whatsnew.title": "Was ist neu",
    "whatsnew.item1.title": "Klareres Interface",
    "whatsnew.item1.desc": "Subtile Rahmen und einklappbare Sektionen reduzieren visuelle Unruhe.",
    "whatsnew.item2.title": "Sticky Ausführen-Button",
    "whatsnew.item2.desc": "Immer sichtbar beim Scrollen durch lange Anfragen.",
    "whatsnew.item3.title": "Verbesserte Anfragenliste",
    "whatsnew.item3.desc": "URL-Host, Statuscodes und relative Zeitstempel auf einen Blick.",
    "whatsnew.item4.title": "Neue Lokalisierungen",
    "whatsnew.item4.desc": "Jetzt verfügbar in Deutsch, Spanisch und Japanisch.",

    // Download
    "download.title": "Bereit loszulegen?",
    "download.subtitle": "Lade ProbePad herunter und teste noch heute APIs.",

    // Footer
    "footer.support": "Support",
    "footer.privacy": "Datenschutz",
    "footer.copyright": "© 2026 Olof Petterson. Alle Rechte vorbehalten.",

    // Support Page
    "support.title": "Support",
    "support.subtitle": "Hilfe zu ProbePad",
    "support.faq.title": "Häufig gestellte Fragen",
    "support.faq.q1": "Wie erstelle ich meine erste API-Anfrage?",
    "support.faq.a1": "Tippe auf den + Button auf dem Hauptbildschirm, gib deine API-URL ein, wähle die HTTP-Methode und tippe auf Ausführen. Deine Antwort erscheint unten.",
    "support.faq.q2": "Wie importiere ich von Postman?",
    "support.faq.a2": "Exportiere deine Postman-Sammlung als JSON v2.1, dann gehe in ProbePad zu Einstellungen > Import > wähle deine Datei. Deine Anfragen und Ordner werden importiert.",
    "support.faq.q3": "Wo werden meine Geheimnisse gespeichert?",
    "support.faq.a3": "Alle Geheimnisse werden verschlüsselt im iOS Keychain gespeichert, geschützt durch die Secure Enclave deines Geräts. Sie verlassen nie dein Gerät.",
    "support.faq.q4": "Wie verwende ich Umgebungsvariablen?",
    "support.faq.a4": "Erstelle eine Umgebung in Einstellungen > Umgebungen, füge deine Variablen hinzu (z.B. {{baseUrl}}), dann verwende sie in deinen Anfragen. Wechsle Umgebungen über die obere Leiste.",
    "support.faq.q5": "Was ist in PRO enthalten?",
    "support.faq.a5": "PRO schaltet unbegrenzte Anfragen, Sammlungen, Umgebungen, Antwortverlauf frei und entfernt alle Limits. Ein Abo funktioniert auf allen deinen Geräten.",
    "support.faq.q6": "Synchronisiert ProbePad zwischen Geräten?",
    "support.faq.a6": "Ja! Aktiviere iCloud-Sync in den Einstellungen, um deine Anfragen, Sammlungen und Umgebungen auf all deinen Apple-Geräten zu synchronisieren.",
    "support.troubleshooting.title": "Fehlerbehebung",
    "support.troubleshooting.item1.title": "Anfrage läuft ab",
    "support.troubleshooting.item1.desc": "Überprüfe deine Internetverbindung und stelle sicher, dass der API-Endpunkt korrekt ist. Einige APIs haben Rate-Limiting.",
    "support.troubleshooting.item2.title": "Kein Zugriff auf Geheimnis-Tresor",
    "support.troubleshooting.item2.desc": "Stelle sicher, dass Face ID / Touch ID in deinen Geräteeinstellungen aktiviert ist. Du kannst auch deinen Gerätecode als Fallback verwenden.",
    "support.troubleshooting.item3.title": "Import fehlgeschlagen",
    "support.troubleshooting.item3.desc": "Stelle sicher, dass dein Postman-Export im Collection v2.1 Format ist. Andere Formate werden derzeit nicht unterstützt.",
    "support.contact.title": "Brauchst du noch Hilfe?",
    "support.contact.desc": "Wir helfen gerne. Sende uns eine E-Mail und wir melden uns bei dir.",
    "support.contact.email": "Support kontaktieren",
    "support.version": "Aktuelle Version",

    // Privacy Page
    "privacy.title": "Datenschutzerklärung",
    "privacy.subtitle": "Deine Daten bleiben auf deinem Gerät",
    "privacy.updated": "Zuletzt aktualisiert: Februar 2026",
    "privacy.highlights.local": "Nur lokale Speicherung",
    "privacy.highlights.notrack": "Kein Tracking",
    "privacy.highlights.encrypted": "Verschlüsselte Geheimnisse",
    "privacy.highlights.control": "Du hast die Kontrolle",
    "privacy.intro": "ProbePad wurde mit Datenschutz als Kernprinzip entwickelt. Wir glauben, dass deine API-Testdaten dir allein gehören.",
    "privacy.collection.title": "Datenerhebung",
    "privacy.collection.content": "ProbePad sammelt, überträgt oder speichert keine deiner Daten auf externen Servern. Alle Informationen, die du eingibst — einschließlich API-Anfragen, Antworten, Sammlungen, Umgebungen und Geheimnisse — verbleiben ausschließlich auf deinem Gerät.",
    "privacy.storage.title": "Datenspeicherung",
    "privacy.storage.content": "Deine Daten werden lokal mit Apples SwiftData-Framework gespeichert. Sensible Informationen wie API-Schlüssel und Tokens werden verschlüsselt und im iOS Keychain gespeichert, geschützt durch die Secure Enclave deines Geräts.",
    "privacy.storage.icloud": "Wenn du iCloud-Sync aktivierst, werden deine Daten (außer Geheimnisse) über dein persönliches iCloud-Konto synchronisiert. Dies ist vollständig optional und kann jederzeit in den Einstellungen deaktiviert werden.",
    "privacy.thirdparty.title": "Drittanbieter-Dienste",
    "privacy.thirdparty.content": "ProbePad integriert keine Drittanbieter-Analyse-, Werbe- oder Tracking-Dienste. Die einzigen Netzwerkanfragen, die die App macht, sind die API-Anfragen, die du explizit erstellst und ausführst.",
    "privacy.thirdparty.appstore": "Wir nutzen Apples App Store für Distribution und Abo-Verwaltung. Apples Datenschutzrichtlinie regelt deren Umgang mit Kaufdaten.",
    "privacy.rights.title": "Deine Rechte",
    "privacy.rights.content": "Da alle Daten lokal auf deinem Gerät gespeichert werden, hast du die volle Kontrolle:",
    "privacy.rights.item1": "Exportiere deine Daten jederzeit via cURL-Export",
    "privacy.rights.item2": "Lösche einzelne Anfragen, Sammlungen oder Umgebungen",
    "privacy.rights.item3": "Lösche alle App-Daten durch Deinstallation der App",
    "privacy.rights.item4": "Deaktiviere iCloud-Sync, um Daten auf einem Gerät zu behalten",
    "privacy.children.title": "Datenschutz für Kinder",
    "privacy.children.content": "ProbePad richtet sich nicht an Kinder unter 13 Jahren. Wir sammeln wissentlich keine Informationen von Kindern.",
    "privacy.changes.title": "Änderungen dieser Richtlinie",
    "privacy.changes.content": "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden dich über Änderungen informieren, indem wir die neue Richtlinie auf dieser Seite veröffentlichen und das Datum \"Zuletzt aktualisiert\" aktualisieren.",
    "privacy.contact.title": "Kontakt",
    "privacy.contact.content": "Bei Fragen zu dieser Datenschutzrichtlinie kontaktiere uns bitte:"
  },

  es: {
    // Nav
    "nav.support": "Soporte",
    "nav.privacy": "Privacidad",

    // Hero
    "hero.title": "Prueba APIs REST en iPhone y iPad",
    "hero.subtitle": "ProbePad es una potente aplicación de pruebas de API centrada en la privacidad. Crea peticiones, organiza colecciones y depura respuestas — todo desde tu bolsillo.",
    "hero.cta": "Descargar en App Store",
    "hero.badge.privacy": "100% Privado",
    "hero.badge.offline": "Funciona Sin Conexión",
    "hero.badge.pro": "Funciones PRO",

    // Features
    "features.title": "Todo lo que necesitas",
    "features.subtitle": "Herramientas profesionales de pruebas de API, diseñadas para móvil.",
    "features.requests.title": "Peticiones HTTP",
    "features.requests.desc": "GET, POST, PUT, PATCH, DELETE con control total de headers y body.",
    "features.collections.title": "Colecciones",
    "features.collections.desc": "Organiza peticiones en carpetas. Mantén tu espacio de trabajo ordenado.",
    "features.environments.title": "Entornos",
    "features.environments.desc": "Cambia entre dev, staging y producción con un solo toque.",
    "features.vault.title": "Bóveda de Secretos",
    "features.vault.desc": "Almacena claves API de forma segura con protección Face ID / Touch ID.",
    "features.history.title": "Historial de Respuestas",
    "features.history.desc": "Compara respuestas con diff JSON. Rastrea cambios a lo largo del tiempo.",
    "features.import.title": "Importar y Exportar",
    "features.import.desc": "Importa desde Postman. Exporta a cURL. Trabaja sin interrupciones.",

    // Screenshots
    "screenshots.title": "Míralo en Acción",
    "screenshots.placeholder": "Captura",

    // What's New
    "whatsnew.title": "Novedades",
    "whatsnew.item1.title": "Interfaz más Limpia",
    "whatsnew.item1.desc": "Bordes sutiles y secciones colapsables reducen el ruido visual.",
    "whatsnew.item2.title": "Botón Ejecutar Fijo",
    "whatsnew.item2.desc": "Siempre visible mientras te desplazas por peticiones largas.",
    "whatsnew.item3.title": "Mejoras en Lista de Peticiones",
    "whatsnew.item3.desc": "Ve host de URL, códigos de estado y marcas de tiempo relativas de un vistazo.",
    "whatsnew.item4.title": "Nuevas Localizaciones",
    "whatsnew.item4.desc": "Ahora disponible en alemán, español y japonés.",

    // Download
    "download.title": "¿Listo para Empezar?",
    "download.subtitle": "Descarga ProbePad y empieza a probar APIs hoy.",

    // Footer
    "footer.support": "Soporte",
    "footer.privacy": "Política de Privacidad",
    "footer.copyright": "© 2026 Olof Petterson. Todos los derechos reservados.",

    // Support Page
    "support.title": "Soporte",
    "support.subtitle": "Obtén ayuda con ProbePad",
    "support.faq.title": "Preguntas Frecuentes",
    "support.faq.q1": "¿Cómo creo mi primera petición API?",
    "support.faq.a1": "Toca el botón + en la pantalla principal, ingresa tu URL de API, selecciona el método HTTP y toca Ejecutar. Tu respuesta aparecerá abajo.",
    "support.faq.q2": "¿Cómo importo desde Postman?",
    "support.faq.a2": "Exporta tu colección de Postman como JSON v2.1, luego en ProbePad ve a Ajustes > Importar > selecciona tu archivo. Tus peticiones y carpetas se importarán.",
    "support.faq.q3": "¿Dónde se almacenan mis secretos?",
    "support.faq.a3": "Todos los secretos se cifran y almacenan en el Keychain de iOS, protegidos por el Secure Enclave de tu dispositivo. Nunca salen de tu dispositivo.",
    "support.faq.q4": "¿Cómo uso las variables de entorno?",
    "support.faq.a4": "Crea un entorno en Ajustes > Entornos, añade tus variables (ej. {{baseUrl}}), luego úsalas en tus peticiones. Cambia de entorno desde la barra superior.",
    "support.faq.q5": "¿Qué incluye PRO?",
    "support.faq.a5": "PRO desbloquea peticiones, colecciones, entornos e historial de respuestas ilimitados, y elimina todos los límites. Una suscripción funciona en todos tus dispositivos.",
    "support.faq.q6": "¿ProbePad sincroniza entre dispositivos?",
    "support.faq.a6": "¡Sí! Activa Sincronización iCloud en Ajustes para mantener tus peticiones, colecciones y entornos sincronizados en todos tus dispositivos Apple.",
    "support.troubleshooting.title": "Solución de Problemas",
    "support.troubleshooting.item1.title": "La petición expira",
    "support.troubleshooting.item1.desc": "Verifica tu conexión a internet y confirma que el endpoint de la API es correcto. Algunas APIs pueden tener límites de velocidad.",
    "support.troubleshooting.item2.title": "No puedo acceder a la Bóveda de Secretos",
    "support.troubleshooting.item2.desc": "Asegúrate de que Face ID / Touch ID esté habilitado en los ajustes de tu dispositivo. También puedes usar tu código de acceso como respaldo.",
    "support.troubleshooting.item3.title": "La importación falló",
    "support.troubleshooting.item3.desc": "Asegúrate de que tu exportación de Postman esté en formato Collection v2.1. Otros formatos no están soportados actualmente.",
    "support.contact.title": "¿Aún Necesitas Ayuda?",
    "support.contact.desc": "Estamos aquí para ayudar. Envíanos un correo y te responderemos.",
    "support.contact.email": "Contactar Soporte",
    "support.version": "Versión Actual",

    // Privacy Page
    "privacy.title": "Política de Privacidad",
    "privacy.subtitle": "Tus datos permanecen en tu dispositivo",
    "privacy.updated": "Última actualización: Febrero 2026",
    "privacy.highlights.local": "Solo Almacenamiento Local",
    "privacy.highlights.notrack": "Sin Rastreo",
    "privacy.highlights.encrypted": "Secretos Cifrados",
    "privacy.highlights.control": "Tú Tienes el Control",
    "privacy.intro": "ProbePad está diseñado con la privacidad como principio fundamental. Creemos que tus datos de pruebas de API son solo tuyos.",
    "privacy.collection.title": "Recopilación de Datos",
    "privacy.collection.content": "ProbePad no recopila, transmite ni almacena ninguno de tus datos en servidores externos. Toda la información que ingresas — incluyendo peticiones API, respuestas, colecciones, entornos y secretos — permanece exclusivamente en tu dispositivo.",
    "privacy.storage.title": "Almacenamiento de Datos",
    "privacy.storage.content": "Tus datos se almacenan localmente usando el framework SwiftData de Apple. La información sensible como claves API y tokens se cifra y almacena en el Keychain de iOS, protegida por el Secure Enclave de tu dispositivo.",
    "privacy.storage.icloud": "Si activas Sincronización iCloud, tus datos (excluyendo secretos) se sincronizan a través de tu cuenta personal de iCloud. Esto es completamente opcional y puede desactivarse en cualquier momento en Ajustes.",
    "privacy.thirdparty.title": "Servicios de Terceros",
    "privacy.thirdparty.content": "ProbePad no integra ningún servicio de análisis, publicidad o rastreo de terceros. Las únicas peticiones de red que hace la aplicación son las peticiones API que tú explícitamente creas y ejecutas.",
    "privacy.thirdparty.appstore": "Usamos el App Store de Apple para distribución y gestión de suscripciones. La política de privacidad de Apple rige su manejo de datos de compra.",
    "privacy.rights.title": "Tus Derechos",
    "privacy.rights.content": "Como todos los datos se almacenan localmente en tu dispositivo, tienes control total:",
    "privacy.rights.item1": "Exporta tus datos en cualquier momento via exportación cURL",
    "privacy.rights.item2": "Elimina peticiones, colecciones o entornos individuales",
    "privacy.rights.item3": "Elimina todos los datos de la app desinstalándola",
    "privacy.rights.item4": "Desactiva Sincronización iCloud para mantener datos en un solo dispositivo",
    "privacy.children.title": "Privacidad de Menores",
    "privacy.children.content": "ProbePad no está dirigido a niños menores de 13 años. No recopilamos conscientemente información de niños.",
    "privacy.changes.title": "Cambios a Esta Política",
    "privacy.changes.content": "Podemos actualizar esta política de privacidad de vez en cuando. Te notificaremos de cualquier cambio publicando la nueva política en esta página y actualizando la fecha de \"Última actualización\".",
    "privacy.contact.title": "Contáctanos",
    "privacy.contact.content": "Si tienes preguntas sobre esta política de privacidad, contáctanos:"
  },

  ja: {
    // Nav
    "nav.support": "サポート",
    "nav.privacy": "プライバシー",

    // Hero
    "hero.title": "iPhone & iPadでREST APIをテスト",
    "hero.subtitle": "ProbePadは、プライバシーを重視した強力なAPIテストアプリです。リクエストを作成し、コレクションを整理し、レスポンスをデバッグ — すべてポケットから。",
    "hero.cta": "App Storeでダウンロード",
    "hero.badge.privacy": "100%プライベート",
    "hero.badge.offline": "オフライン対応",
    "hero.badge.pro": "PRO機能",

    // Features
    "features.title": "必要なすべてが揃っています",
    "features.subtitle": "モバイル向けに設計されたプロフェッショナルなAPIテストツール。",
    "features.requests.title": "HTTPリクエスト",
    "features.requests.desc": "GET、POST、PUT、PATCH、DELETE、ヘッダーとボディを完全にコントロール。",
    "features.collections.title": "コレクション",
    "features.collections.desc": "リクエストをフォルダに整理。ワークスペースを整頓。",
    "features.environments.title": "環境",
    "features.environments.desc": "ワンタップでdev、staging、productionを切り替え。",
    "features.vault.title": "シークレット保管庫",
    "features.vault.desc": "Face ID / Touch ID保護でAPIキーを安全に保存。",
    "features.history.title": "レスポンス履歴",
    "features.history.desc": "JSON diffでレスポンスを比較。時間経過で変更を追跡。",
    "features.import.title": "インポート＆エクスポート",
    "features.import.desc": "Postmanからインポート。cURLにエクスポート。シームレスに作業。",

    // Screenshots
    "screenshots.title": "実際の動作を見る",
    "screenshots.placeholder": "スクリーンショット",

    // What's New
    "whatsnew.title": "新機能",
    "whatsnew.item1.title": "よりクリーンなインターフェース",
    "whatsnew.item1.desc": "微妙なボーダーと折りたたみ可能なセクションで視覚的なノイズを軽減。",
    "whatsnew.item2.title": "固定実行ボタン",
    "whatsnew.item2.desc": "長いリクエストをスクロールしても常に表示。",
    "whatsnew.item3.title": "リクエストリストの改善",
    "whatsnew.item3.desc": "URLホスト、ステータスコード、相対タイムスタンプを一目で確認。",
    "whatsnew.item4.title": "新しいローカライゼーション",
    "whatsnew.item4.desc": "ドイツ語、スペイン語、日本語で利用可能に。",

    // Download
    "download.title": "始める準備はできましたか？",
    "download.subtitle": "ProbePadをダウンロードして、今日からAPIテストを始めましょう。",

    // Footer
    "footer.support": "サポート",
    "footer.privacy": "プライバシーポリシー",
    "footer.copyright": "© 2026 Olof Petterson. All rights reserved.",

    // Support Page
    "support.title": "サポート",
    "support.subtitle": "ProbePadのヘルプ",
    "support.faq.title": "よくある質問",
    "support.faq.q1": "最初のAPIリクエストを作成するには？",
    "support.faq.a1": "メイン画面の+ボタンをタップし、API URLを入力し、HTTPメソッドを選択して、実行をタップします。レスポンスが下に表示されます。",
    "support.faq.q2": "Postmanからインポートするには？",
    "support.faq.a2": "PostmanコレクションをJSON v2.1でエクスポートし、ProbePadで設定 > インポート > ファイルを選択。リクエストとフォルダがインポートされます。",
    "support.faq.q3": "シークレットはどこに保存されますか？",
    "support.faq.a3": "すべてのシークレットは暗号化され、デバイスのSecure Enclaveで保護されたiOS Keychainに保存されます。デバイスから外に出ることはありません。",
    "support.faq.q4": "環境変数の使い方は？",
    "support.faq.a4": "設定 > 環境で環境を作成し、変数を追加（例：{{baseUrl}}）、リクエストで使用します。上部バーから環境を切り替えられます。",
    "support.faq.q5": "PROには何が含まれますか？",
    "support.faq.a5": "PROは無制限のリクエスト、コレクション、環境、レスポンス履歴をアンロックし、すべての制限を解除します。1つのサブスクリプションで全デバイスで使用可能。",
    "support.faq.q6": "ProbePadはデバイス間で同期しますか？",
    "support.faq.a6": "はい！設定でiCloud同期を有効にすると、リクエスト、コレクション、環境がすべてのAppleデバイスで同期されます。",
    "support.troubleshooting.title": "トラブルシューティング",
    "support.troubleshooting.item1.title": "リクエストがタイムアウトする",
    "support.troubleshooting.item1.desc": "インターネット接続を確認し、APIエンドポイントが正しいことを確認してください。一部のAPIにはレート制限があります。",
    "support.troubleshooting.item2.title": "シークレット保管庫にアクセスできない",
    "support.troubleshooting.item2.desc": "デバイス設定でFace ID / Touch IDが有効になっていることを確認してください。デバイスのパスコードをフォールバックとして使用することもできます。",
    "support.troubleshooting.item3.title": "インポートに失敗した",
    "support.troubleshooting.item3.desc": "PostmanエクスポートがCollection v2.1形式であることを確認してください。他の形式は現在サポートされていません。",
    "support.contact.title": "まだ助けが必要ですか？",
    "support.contact.desc": "お手伝いします。メールを送っていただければ、折り返しご連絡いたします。",
    "support.contact.email": "サポートに連絡",
    "support.version": "現在のバージョン",

    // Privacy Page
    "privacy.title": "プライバシーポリシー",
    "privacy.subtitle": "あなたのデータはデバイスに残ります",
    "privacy.updated": "最終更新：2026年2月",
    "privacy.highlights.local": "ローカルストレージのみ",
    "privacy.highlights.notrack": "トラッキングなし",
    "privacy.highlights.encrypted": "暗号化されたシークレット",
    "privacy.highlights.control": "あなたがコントロール",
    "privacy.intro": "ProbePadはプライバシーを核心原則として設計されています。あなたのAPIテストデータはあなただけのものだと考えています。",
    "privacy.collection.title": "データ収集",
    "privacy.collection.content": "ProbePadは、お客様のデータを外部サーバーに収集、送信、保存しません。入力されるすべての情報（APIリクエスト、レスポンス、コレクション、環境、シークレットを含む）は、お客様のデバイスにのみ保存されます。",
    "privacy.storage.title": "データ保存",
    "privacy.storage.content": "データはAppleのSwiftDataフレームワークを使用してローカルに保存されます。APIキーやトークンなどの機密情報は、デバイスのSecure Enclaveで保護されたiOS Keychainに暗号化して保存されます。",
    "privacy.storage.icloud": "iCloud同期を有効にすると、データ（シークレットを除く）は個人のiCloudアカウントを通じて同期されます。これは完全にオプションであり、設定でいつでも無効にできます。",
    "privacy.thirdparty.title": "サードパーティサービス",
    "privacy.thirdparty.content": "ProbePadは、サードパーティの分析、広告、トラッキングサービスを一切統合していません。アプリが行う唯一のネットワークリクエストは、お客様が明示的に作成して実行するAPIリクエストです。",
    "privacy.thirdparty.appstore": "配布とサブスクリプション管理にはAppleのApp Storeを使用しています。Appleのプライバシーポリシーが購入データの取り扱いを規定しています。",
    "privacy.rights.title": "あなたの権利",
    "privacy.rights.content": "すべてのデータはデバイスにローカルに保存されるため、完全なコントロールが可能です：",
    "privacy.rights.item1": "cURLエクスポートでいつでもデータをエクスポート",
    "privacy.rights.item2": "個別のリクエスト、コレクション、環境を削除",
    "privacy.rights.item3": "アプリをアンインストールしてすべてのアプリデータを削除",
    "privacy.rights.item4": "iCloud同期を無効にしてデータを単一デバイスに保持",
    "privacy.children.title": "お子様のプライバシー",
    "privacy.children.content": "ProbePadは13歳未満のお子様を対象としていません。お子様から故意に情報を収集することはありません。",
    "privacy.changes.title": "本ポリシーの変更",
    "privacy.changes.content": "このプライバシーポリシーは随時更新される場合があります。変更がある場合は、このページに新しいポリシーを掲載し、「最終更新」日を更新することでお知らせします。",
    "privacy.contact.title": "お問い合わせ",
    "privacy.contact.content": "このプライバシーポリシーについてご質問がある場合は、お問い合わせください："
  }
};

// Current language
let currentLang = 'en';

// Get translated text
function t(key) {
  return translations[currentLang]?.[key] || translations['en']?.[key] || key;
}

// Set language
function setLanguage(lang) {
  if (!translations[lang]) {
    lang = 'en';
  }

  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem('preferred-lang', lang);

  // Update URL without reload
  const url = new URL(window.location);
  url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);

  // Update all elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    if (translation) {
      el.textContent = translation;
    }
  });

  // Update all elements with data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const translation = t(key);
    if (translation) {
      el.placeholder = translation;
    }
  });

  // Update language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Show/hide language-specific content sections
  document.querySelectorAll('.lang-content').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });
}

// Get preferred language
function getPreferredLanguage() {
  // 1. Check URL parameter
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang && translations[urlLang]) {
    return urlLang;
  }

  // 2. Check localStorage
  const storedLang = localStorage.getItem('preferred-lang');
  if (storedLang && translations[storedLang]) {
    return storedLang;
  }

  // 3. Check browser language
  const browserLang = navigator.language.split('-')[0];
  if (translations[browserLang]) {
    return browserLang;
  }

  // 4. Default to English
  return 'en';
}

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language
  setLanguage(getPreferredLanguage());

  // Add click handlers to language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });
});

// FAQ toggle functionality
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');

      // Close all other FAQ items
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
      });

      // Toggle this item
      if (!wasOpen) {
        item.classList.add('open');
      }
    });
  });
});
