 document.write(`
<!--Sección de Descarga-->
<div class="download-container">
    <!--Header-->
    <div class="series-header">
        <div class="series-icon">⬇</div>
        <div class="series-info">
            <h1>Enlaces de Descarga - Leviathan</h1>
            <p>Audio Latino, Inglés y Japones</p>
        </div>
    </div>

    <!--Pestañas-->
    <div class="tabs-container">
        <button class="tab-button active" onclick="showSeason(1)">Temporada 1</button>
    </div>

    <!--Temporada 1-->
    <div class="tab-content active" id="season-1">
        <div class="season-info">
            <div class="season-title">📺 Primera Temporada</div>
            <div class="season-specs">
                <div class="season-spec">
                    <div class="spec-label">AUDIO</div>
                    <div class="spec-value">Latino EAC3 5.1</div><div class="spec-value">Ingles EAC3 5.1</div><div class="spec-value">Japones EAC3 5.1</div></div><div class="season-spec"><div class="spec-label">FORMATO</div>
                    <div class="spec-value">MKV</div>
                </div>
                <div class="season-spec">
                    <div class="spec-label">PESO TEMPORADA</div>
                    <div class="spec-value">6.31 GB</div>
                </div>
                <div class="season-spec">
                    <div class="spec-label">RESOLUCIÓN</div>
                    <div class="spec-value">1920 x 1080</div>
                </div>
            </div>
        </div>

        <div class="episodes-grid">
            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">1-3</div>
                    <h3 class="episode-title">Episodios 1, 2 y 3</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">1.76 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~82 min
                      </div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/L3vTH4n1" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>

          
        <div class="episodes-grid">
            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">4-6</div>
                    <h3 class="episode-title">Episodios 4, 5 y 6</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">1.45 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~74 min
                      </div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/L3vTH4n4" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>
          
        <div class="episodes-grid">
            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">7-9</div>
                    <h3 class="episode-title">Episodios 7, 8 y 9</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">1.56 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~74 min
                      </div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/L3vTH4n7" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>
          
        <div class="episodes-grid">
            <div class="episode-card">
                <div class="episode-header">
                    <div class="episode-number">10-12</div>
                    <h3 class="episode-title">Episodios 10, 11 y 12</h3>
                </div>
                <div class="episode-specs">
                    <div class="episode-spec">
                        <div class="episode-spec-label">PESO</div>
                        <div class="episode-spec-value">1.54 GB</div>
                    </div>
                    <div class="episode-spec">
                        <div class="episode-spec-label">DURACIÓN TOTAL</div>
                        <div class="episode-spec-value">~77 min
                      </div>
                    </div>
                </div>
                <a class="download-button" href="https://tpi.li/L3vTH4n10" target="_blank">
                    <span>📥</span>
                    <span>DESCARGAR</span>
                </a>
            </div>
                                  
                                  
                                  
        </div>
    </div>

  <!--Contraseña-->
    <div class="password-section">
        <div class="password-header">
            <span class="password-icon">🔐</span>
            <h3 class="password-title">Contraseña del Archivo</h3>
        </div>
        <div class="password-container">
            <input class="password-text" readonly="" type="text" value="mymoviesplayseries" />
            <button class="copy-button" onclick="copyPassword()">
                <span id="copy-text">📋 Copiar</span>
            </button>
        </div>
    </div>
</div>
`);
  