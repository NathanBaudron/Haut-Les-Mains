/**
 * HAUT LES MAINS - Navigation & Footer Modulaires Dynamiques
 * Gère l'injection HTML et l'interactivité globale du Header / Megamenu / Mobile Drawer / Footer.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Détecter le nom du fichier actuel pour le surlignage actif
    const path = window.location.pathname;
    const page = path.split("/").pop() || "index.html";

    // 2. Définition du code HTML pour le Header (Topbar + Header Desktop)
    const headerHTML = `
        <!-- Top Info Bar -->
        <div class="top-bar">
            <div class="container top-bar-content">
                <div class="top-bar-carousel" id="topBarCarousel">
                    <span class="carousel-item active"><strong>Hébergement GRATUIT</strong> durant vos stages de formation !</span>
                    <span class="carousel-item"><strong>Repas du soir GRATUIT</strong> durant vos stages de formation !</span>
                    <span class="carousel-item"><strong>Mise à disposition d'une voiture</strong> sur place !</span>
                    <span class="carousel-item">Transferts aéroport ou TGV (Aix, Marseille, Nice - retour compris)</span>
                </div>
                <div class="top-bar-right">
                    <div class="top-bar-contact">
                        <a href="tel:+33695288020" class="contact-link">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 1.72v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                            <span>06 95 28 80 20</span>
                        </a>
                    </div>
                    <div class="lang-switcher">
                        <button class="lang-btn active" id="btn-lang-fr" aria-label="Langue Française">FR</button>
                        <span class="lang-divider">|</span>
                        <button class="lang-btn" id="btn-lang-en" aria-label="English Language">EN</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Navigation Header -->
        <header class="main-header">
            <div class="container header-container">
                <a href="index.html" class="logo">
                    <img src="pictures/logo.png" alt="Logo Haut les Mains" class="logo-icon">
                    <img src="pictures/text logo.png" alt="Haut les Mains" class="logo-text">
                </a>

                <!-- Desktop Nav -->
                <nav class="desktop-nav">
                    <ul>
                        <li><a href="index.html" class="${page === 'index.html' || page === '' ? 'active' : ''}">Accueil</a></li>
                        <li class="dropdown">
                            <a href="parapente.html" class="${[ 'stage-parapente-inscription.html', 'parapente-madagascar.html', 'parapente-cycle-2.html', 'stage-parapente-perfect.html', 'parapente-cycle-3.html', 'autonomie-parapente.html', 'parapente-cross-distance.html', 'parapente-italie.html', 'progression-rapide-parapente.html', 'stage-parapente-general.html', 'stage-parapente-initiation.html', 'parapente-thermique.html', 'parapente-maroc.html', 'parapente.html', 'progression-parapente-pib.html', 'voyage.html', 'espagne-organya.html', 'stage-parapente-perf.html', 'parapente-pilotage-actif.html', 'stage-parapente-perfectionnement.html', 'parapente-cycle-1.html', 'SIV-parapente.html', 'controle-parapente-speed.html', 'parapente-colombie.html', 'parapente-chili.html', 'parapente-lac-de-garde.html', 'bapteme-parapente.html', 'bapteme-parapente-generalite.html', 'bapteme-parapente-lavande.html', 'bapteme-parapente-verdon.html', 'bapteme-parapente-sensation.html', 'bapteme-parapente-ce.html', 'bapteme-parapente-acro.html', 'parapente-visio-suivi.html' ].includes(page) ? 'active' : ''}">
                                Parapente <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                            <div class="dropdown-menu megamenu-5col">
                                <div class="submenu-group">
                                    <span>Généralités</span>
                                    <a href="stage-parapente-general.html">Généralité Formation</a>
                                    <a href="controle-parapente-speed.html">Contrôle Aile</a>
                                    <a href="stage-parapente-inscription.html">Fiche d'Inscription</a>
                                    <a href="parapente-visio-suivi.html">Visio & Suivi Annuel</a>
                                </div>
                                <div class="submenu-column-container">
                                    <div class="submenu-group">
                                        <span>Cycle 1</span>
                                        <a href="stage-parapente-initiation.html">Stage Initiation Parapente</a>
                                        <a href="stage-parapente-perfectionnement.html">Stage Perf 1</a>
                                    </div>
                                    <div class="submenu-group">
                                        <span>Cycle 2</span>
                                        <a href="stage-parapente-perfect.html">Stage Perf 2</a>
                                        <a href="stage-parapente-perf.html">Stage Perf 3</a>
                                    </div>
                                </div>
                                <div class="submenu-column-container">
                                    <div class="submenu-group">
                                        <span>Cycle 3 & Perfectionnement</span>
                                        <a href="autonomie-parapente.html">Autonomie Déco Atéro</a>
                                        <a href="parapente-thermique.html">Montée en Thermique</a>
                                        <a href="parapente-pilotage-actif.html">Pilotage Actif</a>
                                        <a href="parapente-cross-distance.html">Cross / Distance</a>
                                        <a href="SIV-parapente.html">SIV (Incidents de Vol)</a>
                                    </div>
                                    <div class="submenu-group">
                                        <span>Progression Rapide</span>
                                        <a href="progression-rapide-parapente.html">Progression Accélérée Parapente</a>
                                        <a href="progression-parapente-pib.html">Progression Individualisée Biplace</a>
                                    </div>
                                </div>
                                <div class="submenu-group">
                                    <span>Voyages Parapente</span>
                                    <a href="parapente-italie.html">Italie</a>
                                    <a href="parapente-madagascar.html">Madagascar</a>
                                    <a href="espagne-organya.html">Espagne</a>
                                    <a href="parapente-maroc.html">Le Maroc</a>
                                    <a href="parapente-colombie.html">Colombie</a>
                                    <a href="parapente-chili.html">Chili</a>
                                </div>
                                <div class="submenu-group">
                                    <span>Baptêmes Biplace</span>
                                    <a href="bapteme-parapente.html">Présentation & Tarifs</a>
                                    <a href="bapteme-parapente-generalite.html">Généralité Biplace</a>
                                    <a href="bapteme-parapente-lavande.html">Vol Couleur Lavande</a>
                                    <a href="bapteme-parapente-verdon.html">Vol Vision Verdon</a>
                                    <a href="bapteme-parapente-sensation.html">Vol Sensation</a>
                                    <a href="bapteme-parapente-ce.html">Groupe et CE</a>
                                    <a href="bapteme-parapente-acro.html">Option Voltige</a>
                                </div>
                            </div>
                        </li>
                        <li class="dropdown">
                            <a href="parakite.html" class="${[ 'parakite.html', 'parakite-general.html', 'parakite-initiation.html', 'parakite-perfectionnement.html', 'parakite-controle.html', 'parakite-siv.html' ].includes(page) ? 'active' : ''}">
                                ParaKite <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                            <div class="dropdown-menu">
                                <a href="parakite-general.html">Généralités ParaKite</a>
                                <a href="parakite-initiation.html">Initiation ParaKite</a>
                                <a href="parakite-perfectionnement.html">Perfectionnement</a>
                                <a href="parakite-controle.html">Contrôle ParaKite</a>
                                <a href="parakite-siv.html">SIV ParaKite</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <a href="mini-voile.html" class="${[ 'mini-voile.html', 'mini-voile-general.html', 'mini-voile-initiation.html', 'mini-voile-perfectionnement.html', 'mini-voile-controle.html', 'mini-voile-siv.html' ].includes(page) ? 'active' : ''}">
                                Mini-Voile & Speed <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                            <div class="dropdown-menu">
                                <a href="mini-voile-general.html">Généralités Mini-Voile</a>
                                <a href="mini-voile-initiation.html">Initiation Mini-Voile</a>
                                <a href="mini-voile-perfectionnement.html">Perfectionnement</a>
                                <a href="mini-voile-controle.html">Contrôle Mini-Voile</a>
                                <a href="mini-voile-siv.html">SIV Mini-Voile</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <a href="hebergement.html" class="${[ 'gite.html', 'chambredhote.html', 'hebergement.html', 'maison.html', 'chambre.html', 'dormir.html' ].includes(page) ? 'active' : ''}">
                                Hébergement <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                            <div class="dropdown-menu">
                                <a href="dormir.html">Descriptif Hébergements</a>
                                <a href="gite.html">Gîte "Chez Paul et Vivo"</a>
                                <a href="chambredhote.html">Chambres d'Hôtes "Chez Coco"</a>
                                <a href="chambre.html">Le Dortoir "Chez Lili"</a>
                                <a href="maison.html">Gîte "Chez Angélique"</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <a href="sites-parapente.html" class="${[ 'parapente-castellane.html', 'parapente-digne.html', 'parapente-barreme.html', 'sites-parapente.html', 'parapente-sisteron-saint-geniez.html', 'parapente-oraison.html', 'site-parapente-general.html', 'parapente-lachens.html', 'parapente-le-cordeuil.html', 'parapente-roquebrune.html', 'parapente-lac-de-garde.html' ].includes(page) ? 'active' : ''}">
                                Sites de Vol <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                            <div class="dropdown-menu">
                                <a href="site-parapente-general.html">Généralités</a>
                                <a href="parapente-barreme.html">Site de Barrême</a>
                                <a href="parapente-castellane.html">Site de Castellane</a>
                                <a href="parapente-digne.html">Site de Digne-les-Bains</a>
                                <a href="parapente-oraison.html">Site d'Oraison</a>
                                <a href="parapente-sisteron-saint-geniez.html">Site de Sisteron</a>
                                <a href="parapente-le-cordeuil.html">Site Val d'Allos</a>
                                <a href="parapente-lachens.html">Site du Lachens</a>
                                <a href="parapente-roquebrune.html">Site SIV Roquebrune</a>
                                <a href="parapente-lac-de-garde.html">Site Lac de Garde</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <a href="parapente-divers.html" class="${[ 'village-barreme.html', 'parapente-utilitaires.html', 'parapente-divers.html', 'dirtech.html', 'parapente-provence.html', 'meteo.html', 'verdon-campings-restaurants.html', 'structure.html', 'appi-fela-parapente.html' ].includes(page) ? 'active' : ''}">
                                Infos Pratiques <svg class="chevron" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                            </a>
                            <div class="dropdown-menu">
                                <a href="dirtech.html">Stéphane Henry</a>
                                <a href="meteo.html">Météo & Balises</a>
                                <a href="parapente-provence.html">Nous Rejoindre</a>
                                <a href="village-barreme.html">Le Village de Barrême</a>
                                <a href="verdon-campings-restaurants.html">Bonnes Adresses</a>
                                <a href="parapente-utilitaires.html">Utilitaires & Documents</a>
                                <a href="structure.html">Pourquoi Nous Choisir</a>
                                <a href="appi-fela-parapente.html">Certification APPI & FELA</a>
                            </div>
                        </li>
                        <li><a href="calendrier.html" class="${page === 'calendrier.html' ? 'active' : ''}" style="display:inline-flex;align-items:center;gap:6px;"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>Calendrier</a></li>
                    </ul>
                </nav>

                <!-- CTA Actions -->
                <div class="header-actions">
                    <a href="coordonnees.html" class="btn btn-secondary btn-sm">S'inscrire</a>
                    <button class="mobile-menu-toggle" id="menuToggle" aria-label="Menu de navigation">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>

        <!-- Mobile Navigation Drawer -->
        <div class="mobile-nav-drawer" id="mobileDrawer">
            <div class="mobile-drawer-content">
                
                <!-- Main Panel (Level 1) -->
                <div class="mobile-panel active" id="mobile-panel-main">
                    <nav class="mobile-nav">
                        <ul>
                            <li><a href="index.html" class="mobile-nav-link ${page === 'index.html' || page === '' ? 'active' : ''}">Accueil</a></li>
                            <li><button class="mobile-panel-trigger" data-target="mobile-panel-parapente">Parapente <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button></li>
                            <li><button class="mobile-panel-trigger" data-target="mobile-panel-parakite">ParaKite <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button></li>
                            <li><button class="mobile-panel-trigger" data-target="mobile-panel-minivoile">Mini-Voile & Speed <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button></li>
                            <li><button class="mobile-panel-trigger" data-target="mobile-panel-hebergement">Hébergement <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button></li>
                            <li><button class="mobile-panel-trigger" data-target="mobile-panel-sites">Sites de Vol <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button></li>
                            <li><button class="mobile-panel-trigger" data-target="mobile-panel-infos">Infos Pratiques <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button></li>
                            <li><a href="calendrier.html" class="mobile-nav-link ${page === 'calendrier.html' ? 'active' : ''}">📅 Calendrier</a></li>
                            <li><a href="coordonnees.html" class="mobile-nav-link ${page === 'coordonnees.html' ? 'active' : ''}">S'inscrire</a></li>
                        </ul>
                    </nav>
                </div>

                <!-- Sub-panel: Parapente -->
                <div class="mobile-panel" id="mobile-panel-parapente">
                    <button class="mobile-back-trigger"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg> Retour</button>
                    <div class="mobile-panel-title">Parapente</div>
                    <nav class="mobile-nav">
                        <ul>
                            <li class="submenu-subtitle">Généralités</li>
                            <li><a href="stage-parapente-general.html">Généralité Formation</a></li>
                            <li><a href="controle-parapente-speed.html">Contrôle Aile</a></li>
                            <li><a href="stage-parapente-inscription.html">Fiche d'Inscription</a></li>
                            <li><a href="parapente-visio-suivi.html">Visio & Suivi Annuel</a></li>
                            
                            <li class="submenu-subtitle">Cycle 1</li>
                            <li><a href="stage-parapente-initiation.html">Stage Initiation Parapente</a></li>
                            <li><a href="stage-parapente-perfectionnement.html">Stage Perf 1</a></li>
                            
                            <li class="submenu-subtitle">Cycle 2</li>
                            <li><a href="stage-parapente-perfect.html">Stage Perf 2</a></li>
                            <li><a href="stage-parapente-perf.html">Stage Perf 3</a></li>
                            
                            <li class="submenu-subtitle">Cycle 3 & Perfectionnement</li>
                            <li><a href="autonomie-parapente.html">Autonomie Déco Atéro</a></li>
                            <li><a href="parapente-thermique.html">Montée en Thermique</a></li>
                            <li><a href="parapente-pilotage-actif.html">Pilotage Actif</a></li>
                            <li><a href="parapente-cross-distance.html">Cross / Distance</a></li>
                            <li><a href="SIV-parapente.html">SIV (Incidents de Vol)</a></li>
                            
                            <li class="submenu-subtitle">Progression Rapide</li>
                            <li><a href="progression-rapide-parapente.html">Progression Accélérée Parapente</a></li>
                            <li><a href="progression-parapente-pib.html">Progression Individualisée Biplace</a></li>
                            
                            <li class="submenu-subtitle">Voyages Parapente</li>
                            <li><a href="parapente-italie.html">Italie</a></li>
                            <li><a href="parapente-madagascar.html">Madagascar</a></li>
                            <li><a href="espagne-organya.html">Espagne</a></li>
                            <li><a href="parapente-maroc.html">Le Maroc</a></li>
                            <li><a href="parapente-colombie.html">Colombie</a></li>
                            <li><a href="parapente-chili.html">Chili</a></li>
                            
                            <li class="submenu-subtitle">Baptêmes Biplace</li>
                            <li><a href="bapteme-parapente.html">Présentation & Tarifs</a></li>
                            <li><a href="bapteme-parapente-generalite.html">Généralité Biplace</a></li>
                            <li><a href="bapteme-parapente-lavande.html">Vol Couleur Lavande</a></li>
                            <li><a href="bapteme-parapente-verdon.html">Vol Vision Verdon</a></li>
                            <li><a href="bapteme-parapente-sensation.html">Vol Sensation</a></li>
                            <li><a href="bapteme-parapente-ce.html">Groupe et CE</a></li>
                            <li><a href="bapteme-parapente-acro.html">Option Voltige</a></li>
                        </ul>
                    </nav>
                </div>

                <!-- Sub-panel: ParaKite -->
                <div class="mobile-panel" id="mobile-panel-parakite">
                    <button class="mobile-back-trigger"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg> Retour</button>
                    <div class="mobile-panel-title">ParaKite</div>
                    <nav class="mobile-nav">
                        <ul>
                            <li><a href="parakite-general.html">Généralités ParaKite</a></li>
                            <li><a href="parakite-initiation.html">Initiation ParaKite</a></li>
                            <li><a href="parakite-perfectionnement.html">Perfectionnement</a></li>
                            <li><a href="parakite-controle.html">Contrôle ParaKite</a></li>
                            <li><a href="parakite-siv.html">SIV ParaKite</a></li>
                        </ul>
                    </nav>
                </div>

                <!-- Sub-panel: Mini-Voile -->
                <div class="mobile-panel" id="mobile-panel-minivoile">
                    <button class="mobile-back-trigger"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg> Retour</button>
                    <div class="mobile-panel-title">Mini-Voile & Speed</div>
                    <nav class="mobile-nav">
                        <ul>
                            <li><a href="mini-voile-general.html">Généralités Mini-Voile</a></li>
                            <li><a href="mini-voile-initiation.html">Initiation Mini-Voile</a></li>
                            <li><a href="mini-voile-perfectionnement.html">Perfectionnement</a></li>
                            <li><a href="mini-voile-controle.html">Contrôle Mini-Voile</a></li>
                            <li><a href="mini-voile-siv.html">SIV Mini-Voile</a></li>
                        </ul>
                    </nav>
                </div>



                <!-- Sub-panel: Hébergement -->
                <div class="mobile-panel" id="mobile-panel-hebergement">
                    <button class="mobile-back-trigger"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg> Retour</button>
                    <div class="mobile-panel-title">Hébergement</div>
                    <nav class="mobile-nav">
                        <ul>
                            <li><a href="dormir.html">Descriptif Hébergements</a></li>
                            <li><a href="gite.html">Gîte "Chez Paul et Vivo"</a></li>
                            <li><a href="chambredhote.html">Chambres d'Hôtes "Chez Coco"</a></li>
                            <li><a href="chambre.html">Le Dortoir "Chez Lili"</a></li>
                            <li><a href="maison.html">Gîte "Chez Angélique"</a></li>
                        </ul>
                    </nav>
                </div>

                <!-- Sub-panel: Sites de Vol -->
                <div class="mobile-panel" id="mobile-panel-sites">
                    <button class="mobile-back-trigger"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg> Retour</button>
                    <div class="mobile-panel-title">Sites de Vol</div>
                    <nav class="mobile-nav">
                        <ul>
                            <li><a href="site-parapente-general.html">Généralités</a></li>
                            <li><a href="parapente-barreme.html">Site de Barrême</a></li>
                            <li><a href="parapente-castellane.html">Site de Castellane</a></li>
                            <li><a href="parapente-digne.html">Site de Digne-les-Bains</a></li>
                            <li><a href="parapente-oraison.html">Site d'Oraison</a></li>
                            <li><a href="parapente-sisteron-saint-geniez.html">Site de Sisteron</a></li>
                            <li><a href="parapente-le-cordeuil.html">Site Val d'Allos</a></li>
                            <li><a href="parapente-lachens.html">Site du Lachens</a></li>
                            <li><a href="parapente-roquebrune.html">Site SIV Roquebrune</a></li>
                            <li><a href="parapente-lac-de-garde.html">Site Lac de Garde</a></li>
                        </ul>
                    </nav>
                </div>

                <!-- Sub-panel: Infos Pratiques -->
                <div class="mobile-panel" id="mobile-panel-infos">
                    <button class="mobile-back-trigger"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg> Retour</button>
                    <div class="mobile-panel-title">Infos Pratiques</div>
                    <nav class="mobile-nav">
                        <ul>
                            <li><a href="dirtech.html">Stéphane Henry</a></li>
                            <li><a href="meteo.html">Météo & Balises</a></li>
                            <li><a href="parapente-provence.html">Nous Rejoindre</a></li>
                            <li><a href="village-barreme.html">Le Village de Barrême</a></li>
                            <li><a href="verdon-campings-restaurants.html">Bonnes Adresses</a></li>
                            <li><a href="parapente-utilitaires.html">Utilitaires & Documents</a></li>
                            <li><a href="structure.html">Pourquoi Nous Choisir</a></li>
                            <li><a href="appi-fela-parapente.html">Certification APPI & FELA</a></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    `;

    // 3. Définition du code HTML pour le Footer
    const footerHTML = `
        <div class="container">
            <div class="footer-grid">
                <!-- Col 1: About / License -->
                <div class="footer-col footer-col-about">
                    <a href="index.html" class="logo footer-logo">
                        <img src="pictures/logo.png" alt="Logo Haut les Mains" class="logo-icon">
                        <img src="pictures/text logo.png" alt="Haut les Mains" class="logo-text">
                    </a>
                    <p class="footer-desc">Licence et enseignement APPI-Fly. L'APPI propose une licence parapente basée sur une haute qualité de pratique et un système éducatif reconnu internationalement (Pilote, Tandem pilote, Instructeur).</p>
                    <p class="footer-legal-mention">Assurance : Code Partenaire Volpack RC Aérienne <strong>EPHM04</strong>.</p>
                </div>

                <!-- Col 2: Navigation Links -->
                <div class="footer-col">
                    <h4>Plan du site</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Accueil</a></li>
                        <li><a href="stage-parapente-general.html">Stages & Formations</a></li>
                        <li><a href="dormir.html">Hébergements et Repas</a></li>
                        <li><a href="sites-parapente.html">Sites de Vol Libre</a></li>
                        <li><a href="coordonnees.html">Nous Contacter</a></li>
                    </ul>
                </div>

                <!-- Col 3: Quick Links / Options -->
                <div class="footer-col">
                    <h4>Prestations & Utilitaires</h4>
                    <ul class="footer-links">
                        <li><a href="controle-parapente-speed.html">Contrôle de voile</a></li>
                        <li><a href="meteo.html">Météo & Balises</a></li>
                        <li><a href="parapente-utilitaires.html">Outils pédagogiques</a></li>
                        <li><a href="sitemap.html">Plan du site global</a></li>
                    </ul>
                </div>

                <!-- Col 4: Contacts -->
                <div class="footer-col">
                    <h4>Coordonnées</h4>
                    <address class="footer-address">
                        <p><strong>École de Vol Libre Haut les Mains</strong></p>
                        <p>Le village, 04330 Barrême</p>
                        <p class="footer-tel">Tél / WhatsApp : <a href="tel:+33695288020">06 95 28 80 20</a></p>
                        <p>Stéphane Henry, Moniteur & Ski Man</p>
                        <div class="footer-social-links" style="margin-top: 16px; display: flex; gap: 16px; align-items: center;">
                            <a href="https://www.facebook.com/haut.les.mains.parapente" target="_blank" rel="noopener noreferrer" style="color: var(--text-light); transition: color var(--transition-fast); display: inline-flex; align-items: center; gap: 6px; text-decoration: none;" onmouseover="this.style.color='var(--sky-primary)'" onmouseout="this.style.color='var(--text-light)'" aria-label="Facebook Haut les Mains">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                <span>Facebook</span>
                            </a>
                            <a href="https://www.instagram.com/hautlesmainsparapente/" target="_blank" rel="noopener noreferrer" style="color: var(--text-light); transition: color var(--transition-fast); display: inline-flex; align-items: center; gap: 6px; text-decoration: none;" onmouseover="this.style.color='var(--sky-primary)'" onmouseout="this.style.color='var(--text-light)'" aria-label="Instagram Haut les Mains">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                <span>Instagram</span>
                            </a>
                        </div>
                    </address>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <p>&copy; 2026 Haut les Mains. Tous droits réservés. Modernisation graphique épurée (sans émojis).</p>
                <div class="footer-bottom-links">
                    <a href="mentions_legales.html">Mentions Légales</a>
                    <a href="#top" class="back-to-top">
                        <span>Haut de page</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>
                    </a>
                </div>
            </div>
        </div>
    `;

    // 4. Injection des éléments
    const headerPlaceholder = document.getElementById("header-placeholder");
    const footerPlaceholder = document.getElementById("footer-placeholder");

    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = headerHTML;
    }
    if (footerPlaceholder) {
        // Envelopper le footer HTML dans une balise footer sémantique avec la classe main-footer
        footerPlaceholder.innerHTML = `<footer class="main-footer">${footerHTML}</footer>`;
    }

    // 5. Initialisation des comportements interactifs du Header injecté (Mobile Drawer & Panels Glissants)
    const menuToggle = document.getElementById("menuToggle");
    const mobileDrawer = document.getElementById("mobileDrawer");

    if (menuToggle && mobileDrawer) {
        // Réinitialisation de l'état du drawer mobile
        const resetMobileDrawer = () => {
            const panels = mobileDrawer.querySelectorAll(".mobile-panel");
            panels.forEach(p => {
                p.classList.remove("active");
                p.classList.remove("slide-left");
            });
            const mainPanel = document.getElementById("mobile-panel-main");
            if (mainPanel) mainPanel.classList.add("active");
        };

        // Ouvrir/Fermer le drawer
        menuToggle.addEventListener("click", () => {
            const isOpen = mobileDrawer.classList.contains("active");
            if (!isOpen) {
                resetMobileDrawer();
            }
            menuToggle.classList.toggle("active");
            mobileDrawer.classList.toggle("active");
            document.body.classList.toggle("overflow-hidden");
        });

        // Fermer le drawer lors d'un clic sur un lien normal
        const mobileNavLinks = mobileDrawer.querySelectorAll("a:not([href='#'])");
        mobileNavLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                mobileDrawer.classList.remove("active");
                document.body.classList.remove("overflow-hidden");
                setTimeout(resetMobileDrawer, 300); // Réinitialiser après la transition
            });
        });

        // Navigation entre panels
        const panelTriggers = mobileDrawer.querySelectorAll(".mobile-panel-trigger");
        const backTriggers = mobileDrawer.querySelectorAll(".mobile-back-trigger");
        const mainPanel = document.getElementById("mobile-panel-main");

        panelTriggers.forEach(trigger => {
            trigger.addEventListener("click", () => {
                const targetId = trigger.getAttribute("data-target");
                const targetPanel = document.getElementById(targetId);
                if (targetPanel) {
                    if (mainPanel) mainPanel.classList.add("slide-left");
                    targetPanel.classList.add("active");
                }
            });
        });

        backTriggers.forEach(back => {
            back.addEventListener("click", () => {
                const currentPanel = back.closest(".mobile-panel");
                if (currentPanel) {
                    currentPanel.classList.remove("active");
                    if (mainPanel) mainPanel.classList.remove("slide-left");
                }
            });
        });
    }

    // 6. Gestion du carrousel de la barre d'info en haut (si présente)
    const carouselItems = document.querySelectorAll("#topBarCarousel .carousel-item");
    if (carouselItems.length > 0) {
        let currentIndex = 0;
        setInterval(() => {
            carouselItems[currentIndex].classList.remove("active");
            currentIndex = (currentIndex + 1) % carouselItems.length;
            carouselItems[currentIndex].classList.add("active");
        }, 4000);
    }

    // 7. SYSTEM DE TRADUCTION MULTILINGUE (FR / EN)
    
    // Utilitaires de gestion des cookies de traduction
    function setTranslateCookie(lang) {
        const domain = window.location.hostname;
        document.cookie = "googtrans=" + lang + "; path=/; SameSite=Lax";
        document.cookie = "googtrans=" + lang + "; path=/; domain=" + domain + "; SameSite=Lax";
        if (domain.includes('.')) {
            document.cookie = "googtrans=" + lang + "; path=/; domain=." + domain + "; SameSite=Lax";
            const parts = domain.split('.');
            if (parts.length > 2) {
                const parentDomain = parts.slice(-2).join('.');
                document.cookie = "googtrans=" + lang + "; path=/; domain=." + parentDomain + "; SameSite=Lax";
            }
        }
    }

    function clearTranslateCookie() {
        const domain = window.location.hostname;
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax";
        document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + domain + "; SameSite=Lax";
        if (domain.includes('.')) {
            document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + domain + "; SameSite=Lax";
            const parts = domain.split('.');
            if (parts.length > 2) {
                const parentDomain = parts.slice(-2).join('.');
                document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=." + parentDomain + "; SameSite=Lax";
            }
        }
    }

    // Déclenchement de la traduction via l'élément caché Google Translate
    function triggerGoogleTranslate(langCode) {
        const select = document.querySelector('select.goog-te-combo');
        if (select) {
            if (langCode === 'fr') {
                let hasFr = false;
                for (let i = 0; i < select.options.length; i++) {
                    if (select.options[i].value === 'fr') {
                        hasFr = true;
                        break;
                    }
                }
                select.value = hasFr ? 'fr' : '';
            } else {
                select.value = langCode;
            }
            select.dispatchEvent(new Event('change'));
            return true;
        }
        return false;
    }

    // Application de la langue sélectionnée
    function applyTranslation(langCode) {
        if (langCode === 'en') {
            setTranslateCookie('/fr/en');
            localStorage.setItem('hlm_lang', 'en');
        } else {
            clearTranslateCookie();
            localStorage.setItem('hlm_lang', 'fr');
        }

        // Mettre à jour l'affichage des boutons immédiatement
        updateSwitcherButtons(langCode);

        // Tenter d'appliquer la traduction
        if (triggerGoogleTranslate(langCode)) {
            // Le widget est déjà chargé, action immédiate
        } else {
            // Si pas encore chargé, vérifier régulièrement (polling)
            let attempts = 0;
            const interval = setInterval(() => {
                attempts++;
                if (triggerGoogleTranslate(langCode) || attempts > 30) {
                    clearInterval(interval);
                    updateSwitcherButtons(langCode);
                    // Si échec du retour au français (rare), on recharge pour garantir le propre
                    if (attempts > 30 && langCode === 'fr') {
                        window.location.reload();
                    }
                }
            }, 100);
        }
    }

    function updateSwitcherButtons(langCode) {
        const btnFr = document.getElementById("btn-lang-fr");
        const btnEn = document.getElementById("btn-lang-en");
        if (btnFr && btnEn) {
            if (langCode === 'en') {
                btnFr.classList.remove("active");
                btnEn.classList.add("active");
            } else {
                btnFr.classList.add("active");
                btnEn.classList.remove("active");
            }
        }
    }

    // Configuration des écouteurs de clics sur les boutons
    const btnFr = document.getElementById("btn-lang-fr");
    const btnEn = document.getElementById("btn-lang-en");
    if (btnFr && btnEn) {
        btnFr.addEventListener("click", (e) => {
            e.preventDefault();
            applyTranslation("fr");
        });
        btnEn.addEventListener("click", (e) => {
            e.preventDefault();
            applyTranslation("en");
        });
    }

    // Mettre en surbrillance le bouton actif dès le chargement (lecture du stockage local)
    const initialLang = localStorage.getItem('hlm_lang') || 'fr';
    updateSwitcherButtons(initialLang);

    // Injection dynamique du script Google Translate
    function injectGoogleTranslate() {
        // Ajout du conteneur caché requis
        if (!document.getElementById('google_translate_element')) {
            const el = document.createElement('div');
            el.id = 'google_translate_element';
            el.style.display = 'none';
            document.body.appendChild(el);
        }

        // Callback global appelé par l'API Google
        window.googleTranslateElementInit = function() {
            new google.translate.TranslateElement({
                pageLanguage: 'fr',
                includedLanguages: 'fr,en',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
                autoDisplay: false
            }, 'google_translate_element');

            // Appliquer la traduction si l'anglais était actif
            const savedLang = localStorage.getItem('hlm_lang') || 'fr';
            if (savedLang === 'en') {
                applyTranslation('en');
            }
        };

        // Ajout de la balise script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.body.appendChild(script);
    }

    // Exécuter l'injection
    injectGoogleTranslate();
});
