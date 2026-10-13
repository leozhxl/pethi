'use client'

import { useState } from 'react'
import { ArrowUpRight, ChevronRight, Lightbulb, Menu, MessageCircle, PenTool, Printer, Sparkles, X } from 'lucide-react'

const instagramLink = 'https://www.instagram.com/pethiatelie/'
const instagramPhotos = [
  'Lembrancinhas de vela em potinhos de vidro com rolha, flores secas e rótulo Davi',
  'Vela Padrinhos em copo de vidro com tampa de madeira e laço de juta',
  'Vela Rogai por nós com imagem de Nossa Senhora Aparecida e laço azul',
  'Vela Rogai por nós em pote com tampa de bambu, ao lado de um terço',
  'Vela A luz que nunca se apaga, Jesus, com ostensório dourado',
  'Kit com imagem de Nossa Senhora e vela Jesus sobre bandeja Ore e confie',
  'Luminária com foto em impressão 3D de mãe e filho',
  'Lembrancinhas de batizado com pomba do Espírito Santo e bandeja Batizado Heitor',
].map((alt, index) => ({ src: `/instagram/${index + 1}.jpg`, alt }))

const waLink = 'https://wa.me/5548999999999?text=Oi!%20Vim%20pelo%20site%20da%20Pethi%20e%20quero%20fazer%20um%20pedido%20%F0%9F%95%AF'

const fragrances = [
  ['Tarde de domingo', 'baunilha · âmbar · madeira'],
  ['Abraço de vó', 'lavanda · talco · algodão'],
  ['Café passado', 'café · canela · caramelo'],
  ['Casa arrumada', 'chá branco · limão · musk'],
  ['Jardim depois da chuva', 'folhas verdes · jasmim · terra'],
  ['Pausa para respirar', 'capim-limão · alecrim · cedro'],
]

function ImageCard({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return <img src={src} alt={alt} className={`object-cover ${className}`} />
}

function InstagramTile({ src, alt, index }: { src: string; alt: string; index: number }) {
  const [missing, setMissing] = useState(false)
  return (
    <a href={instagramLink} target="_blank" rel="noreferrer" className="insta-tile">
      {missing ? <span className="insta-placeholder"><InstagramGlyph /><small>foto {index + 1}</small></span> : <img src={src} alt={alt} onError={() => setMissing(true)} />}
      <span className="insta-hover"><InstagramGlyph /></span>
    </a>
  )
}

function InstagramGlyph() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".6" fill="currentColor" /></svg>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="site-shell">
      <div className="announcement"><div className="announcement-track">{[0, 1].map((copy) => <div key={copy} aria-hidden={copy === 1}>{['Feito à mão em Sombrio/SC', 'Encomendas personalizadas', 'Envio para todo o Brasil', 'Embalado para presente'].map((item) => <span key={item}>{item}<i>✦</i></span>)}</div>)}</div></div>
      <header className="site-header">
        <a href="#inicio" className="wordmark" aria-label="Pethi início">Pethi<span>.</span></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#impressao">Impressão 3D</a><a href="#velas">Velas</a><a href="#instagram">Instagram</a><a href="#sobre">Sobre nós</a><a href="#contato">Contato</a>
        </nav>
        <a className="header-cta" href={waLink}>Fazer meu pedido <span className="header-cta-icon"><ArrowUpRight size={14} /></span></a>
        <button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Abrir menu"><Menu /></button>
      </header>
      {menuOpen && <div className="mobile-menu"><button className="close-button" onClick={closeMenu} aria-label="Fechar menu"><X /></button><div className="mobile-links"><a href="#impressao" onClick={closeMenu}>Impressão 3D</a><a href="#velas" onClick={closeMenu}>Velas</a><a href="#instagram" onClick={closeMenu}>Instagram</a><a href="#sobre" onClick={closeMenu}>Sobre nós</a><a href="#contato" onClick={closeMenu}>Contato</a></div><a className="button button-fill" href={waLink}>Fazer meu pedido <ArrowUpRight size={16} /></a></div>}

      <section id="inicio" className="hero section-pad">
        <div className="hero-copy">
          <p className="hero-eyebrow"><span className="hero-eyebrow-dot" />olá, que bom te ver por aqui</p>
          <h1>Presentes com propósito, <em>feitos à mão.</em></h1>
          <p className="hero-description">Velas aromáticas, peças em impressão 3D e personalizados criados com carinho em cada detalhe — do nosso ateliê em Sombrio direto para quem você ama.</p>
          <div className="button-row"><a className="button button-fill" href={waLink}>Quero um presente <span className="button-icon"><ArrowUpRight size={15} /></span></a><a className="button button-outline" href="#velas">Conhecer as velas</a></div>
          <div className="seal-row"><span>Velas</span><i>•</i><span>Impressão 3D</span><i>•</i><span>Personalizados</span></div>
        </div>
        <div className="hero-media">
          <video src="/video.mp4" autoPlay muted loop playsInline preload="auto" aria-label="Vela personalizada acesa com nomes gravados" />
        </div>
      </section>

      <section className="atelier-strip"><div><span className="line-icon">✳</span><p>Feito à mão</p></div><div><span className="line-icon">⌁</span><p>Personalizado do seu jeito</p></div><div><span className="line-icon">♡</span><p>Embalado para presentear</p></div></section>

      <section id="impressao" className="print-section section-pad">
        <div className="print-head">
          <div><p className="print-chip"><span className="hero-eyebrow-dot" />01 / impressão 3D</p><h2>Ideias que<br /><em>ganham forma.</em></h2></div>
          <div className="print-intro"><p>Você imagina. A gente modela, imprime e entrega pronto para fazer parte de um momento especial.</p><a href={waLink} className="print-cta">Mandar uma ideia <span className="button-icon"><ArrowUpRight size={15} /></span></a></div>
        </div>
        <div className="print-bento">
          <figure className="print-photo"><ImageCard src="/impressao-3d-batizado.jpg" alt="Lembrancinhas de batizado impressas em 3D: pomba do Espírito Santo com raios dourados, bandeja com nome Heitor e lata de vela personalizada" /><figcaption><span className="print-glass">✦ Tecnologia que transforma ideias em realidade</span><span className="print-glass print-glass-light"><b>Camada por camada</b>do modelo digital à peça pronta</span></figcaption></figure>
          <div className="print-card"><span className="print-card-index">01</span><h3>O que é?</h3><p>Um processo de fabricação aditiva: a impressora recebe um <b>modelo digital</b> e constrói o objeto <b>em camadas</b>, usando diferentes materiais.</p></div>
          <div className="print-card"><span className="print-card-index">02</span><h3>Como funciona?</h3><p>O filamento é aquecido e depositado em pequenas quantidades, seguindo o desenho digital — milhares de vezes, até a peça ficar completa.</p></div>
          <div className="print-card print-card-wide"><h3>O que dá pra criar</h3><div className="print-tags">{['Peças decorativas', 'Chaveiros', 'Topos de bolo', 'Porta-velas', 'Luminárias', 'Miniaturas', 'Lembrancinhas', 'Brindes corporativos'].map((item) => <span key={item}>{item}</span>)}</div></div>
        </div>
        <div className="print-materials"><p className="print-label">materiais mais usados</p><div>{[['PLA', 'Fácil de imprimir e biodegradável.'], ['ABS', 'Mais resistente e durável.'], ['Resina', 'Alta precisão e detalhes incríveis.'], ['Metal', 'Projetos industriais e de alta performance.']].map(([name, text]) => <div key={name}><b>{name}</b><span>{text}</span></div>)}</div></div>
      </section>

      <section className="how-section section-pad">
        <div className="how-head"><p className="how-kicker">do esboço à peça pronta</p><h2>Como <em>funciona</em></h2></div>
        <ol className="how-steps">{([[Lightbulb, 'Ideia', 'Você manda a sua ideia — pode ser um desenho, uma foto ou só uma vontade. A gente cuida do resto.'], [PenTool, 'Modelagem', 'Modelamos a peça em 3D no computador e te mostramos como vai ficar antes de imprimir.'], [Printer, 'Impressão', 'A peça ganha forma camada por camada, com material de origem vegetal e acabamento cuidadoso.'], [Sparkles, 'Acabamento', 'Cada peça é revisada e finalizada à mão, pronta para presentear ou usar.']] as const).map(([Icon, title, text], index) => <li key={title}><span className="how-icon"><Icon size={20} strokeWidth={1.6} /></span><span className="how-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol>
        <div className="how-gallery">{[['https://images.unsplash.com/photo-1611117775350-ac3950990985?w=900&q=80', 'Impressoras 3D trabalhando lado a lado', 'Camada por camada'], ['https://images.unsplash.com/photo-1563520239648-a24e51d4b570?w=900&q=80', 'Impressora 3D com peças coloridas recém-impressas', 'Com precisão'], ['/impressao-3d-batizado.jpg', 'Lembrancinhas de batizado impressas em 3D com acabamento dourado', 'Com cuidado']].map(([src, alt, label]) => <figure key={label}><ImageCard src={src} alt={alt} /><figcaption>{label}</figcaption></figure>)}</div>
      </section>

      <section id="velas" className="candle-section section-pad">
        <div className="candle-grid">
          <figure className="candle-media"><img src="/vela-luz-de-fe.jpg" alt="Vela artesanal acesa com medalha dourada do Espírito Santo e plaquinha Luz de Fé sobre mesa de madeira" /><figcaption className="print-glass print-glass-light"><b>Feita à mão</b>uma a uma, no nosso ateliê</figcaption></figure>
          <div className="candle-copy">
            <p className="scent-chip"><span className="hero-eyebrow-dot" />02 / velas aromáticas</p>
            <h2>Velas que transformam <em>o ambiente.</em></h2>
            <p className="candle-lead">Uma chama pequena pode mudar o clima de uma casa inteira.</p>
            <p>Cada vela da Pethi é feita à mão, em pequenos lotes, com cera vegetal e essências selecionadas. Os recipientes foram pensados para continuar fazendo parte da sua casa — e da sua história — depois que a vela termina.</p>
            <ul className="candle-features">{[['Cera vegetal', 'Queima limpa e uniforme'], ['Pavio de algodão', 'Chama calma e constante'], ['Rótulo personalizado', 'Nome, data ou frase especial'], ['Recipientes reutilizáveis', 'Vidro, cerâmica ou lata']].map(([title, text]) => <li key={title}><b>{title}</b><span>{text}</span></li>)}</ul>
            <a href={waLink} className="print-cta candle-cta">Encomendar minha vela <span className="button-icon"><ArrowUpRight size={15} /></span></a>
          </div>
        </div>
      </section>

      <section id="fragrancias" className="scent-section section-pad">
        <div className="scent-head">
          <div><p className="scent-chip"><span className="hero-eyebrow-dot" />fragrâncias</p><h2>Fragrâncias com<br /><em>nome de afeto.</em></h2></div>
          <p>Qual delas combina com a sua história? Toque em uma fragrância e a gente conversa pelo WhatsApp.</p>
        </div>
        <div className="scent-grid">{fragrances.map(([name, notes], index) => <a href={waLink} className={`scent-card scent-${index + 1}`} key={name}><div className="scent-card-top"><span className="scent-number">0{index + 1}</span><span className="scent-arrow"><ArrowUpRight size={16} /></span></div><div><h3>{name}</h3><div className="scent-notes">{notes.split(' · ').map((note) => <span key={note}>{note}</span>)}</div></div></a>)}</div>
        <div className="care-card"><div className="care-head"><span className="care-icon">♡</span><div><p className="scent-label">com carinho</p><h3>Como cuidar da sua vela</h3></div></div><ol className="care-tips">{['Na primeira vez, deixe queimar até derreter toda a superfície — assim a vela queima por igual sempre.', 'Apare o pavio a cerca de 5 mm antes de acender, para uma chama mais bonita e duradoura.', 'Não deixe acesa por mais de 4 horas seguidas, para preservar o aroma e o recipiente.', 'Nunca deixe uma vela acesa sem supervisão. Segurança antes de tudo.'].map((tip, index) => <li key={index}><span>0{index + 1}</span><p>{tip}</p></li>)}</ol></div>
      </section>

      <section id="instagram" className="insta-section section-pad">
        <div className="insta-head">
          <div><p className="scent-chip"><span className="hero-eyebrow-dot" />03 / nosso instagram</p><h2>Acompanhe a Pethi<br /><em>de perto.</em></h2></div>
          <div className="insta-profile"><span className="insta-avatar">P</span><div><b>@pethiatelie</b><span>bastidores, novidades e peças prontas</span></div><a href={instagramLink} target="_blank" rel="noreferrer" className="print-cta candle-cta">Seguir no Instagram <span className="button-icon"><ArrowUpRight size={15} /></span></a></div>
        </div>
        <div className="insta-grid">{instagramPhotos.map(({ src, alt }, index) => <InstagramTile key={src} src={src} alt={alt} index={index} />)}</div>
      </section>

      <section className="order-section section-pad"><div className="section-heading"><p className="eyebrow">04 / sem complicação</p><h2>Como <em>encomendar.</em></h2></div><div className="order-grid">{[['01','Escolha ou imagine','Escolha um produto ou mande sua ideia.'],['02','A gente cria','Te mostramos tudo antes de produzir.'],['03','Feito à mão','Produção cuidadosa, do começo ao fim.'],['04','Pronto para entregar','Embalado para presente e enviado.']].map(([number,title,text]) => <div key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section id="sobre" className="about-section section-pad"><figure className="about-image"><ImageCard src="/vela-rogai-por-nos.png" alt="Vela artesanal em pote de vidro com tampa de bambu, escrita Rogai por nós e imagem de Nossa Senhora Aparecida, ao lado de um terço" /><figcaption className="print-glass">✦ Ateliê em Sombrio/SC</figcaption></figure><div className="about-copy"><p className="scent-chip"><span className="hero-eyebrow-dot" />05 / sobre nós</p><h2>A Pethi nasceu da vontade de transformar presentes em <em>memórias.</em></h2><p className="about-lead">Somos um pequeno ateliê em Sombrio/SC. Por aqui, cada pedido passa por mãos, conversas e uma boa dose de carinho.</p><p className="about-text">Esta história ainda está sendo escrita — e a gente adoraria que o seu momento fizesse parte dela.</p><ul className="about-values">{['Feito à mão', 'Pedidos sob medida', 'Atendimento próximo'].map((item) => <li key={item}>{item}</li>)}</ul><div className="about-sign"><span className="about-avatar">P</span><div><b>com carinho, Pethi</b><span>velas · impressão 3D · personalizados</span></div><a href={waLink} className="print-cta candle-cta">Conversar com a gente <span className="button-icon"><ArrowUpRight size={15} /></span></a></div></div></section>

      <footer id="contato" className="site-footer">
        <div className="ft-cta">
          <div><p className="ft-kicker">vamos conversar?</p><h2>Vamos criar algo<br /><em>especial juntos.</em></h2></div>
          <div className="ft-cta-actions"><a href={waLink} className="print-cta">Chamar no WhatsApp <span className="button-icon"><ArrowUpRight size={15} /></span></a><a href={instagramLink} target="_blank" rel="noreferrer" className="ft-ghost">@pethiatelie</a></div>
        </div>
        <div className="ft-grid">
          <div className="ft-brand"><a href="#inicio" className="wordmark wordmark-light">Pethi<span>.</span></a><p>Velas aromáticas, impressão 3D e personalizados feitos com carinho em cada detalhe.</p></div>
          <nav className="ft-col" aria-label="Rodapé"><p className="ft-label">navegue</p><a href="#impressao">Impressão 3D</a><a href="#velas">Velas</a><a href="#fragrancias">Fragrâncias</a><a href="#instagram">Instagram</a><a href="#sobre">Sobre nós</a></nav>
          <div className="ft-col"><p className="ft-label">fale com a gente</p><a href={waLink}>WhatsApp <ArrowUpRight size={14} /></a><a href={instagramLink} target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={14} /></a></div>
          <div className="ft-col"><p className="ft-label">atendimento</p><span>Segunda a sexta, 9h às 18h</span><span>Sombrio/SC</span><span className="ft-pill"><i />Envios para todo o Brasil</span></div>
        </div>
        <div className="ft-bottom"><span>© 2026 Pethi · Velas & Personalizados</span><span>feito à mão, com intenção ♡</span><a href="#inicio" className="ft-top">Voltar ao topo ↑</a></div>
        <div className="ft-giant" aria-hidden="true">Pethi.</div>
      </footer>
      <a href={waLink} className="whatsapp-float" aria-label="Falar com a Pethi pelo WhatsApp"><MessageCircle size={23} /></a>
    </main>
  )
}
