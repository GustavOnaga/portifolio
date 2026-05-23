async function loadSection(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

async function initPortfolio() {
    await loadSection("header-section", "sections/header.html");
    await loadSection("sobre-section", "sections/sobre.html");
    await loadSection("projetos-section", "sections/projetos.html");
    await loadSection("formacao-section", "sections/formacao.html");
    await loadSection("certificacoes-section", "sections/certificacoes.html");
    await loadSection("footer-section", "sections/footer.html");
}

initPortfolio();