async function loadSection(id, file) {
    const response = await fetch(file);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
}

loadSection("header-section", "sections/header.html");
loadSection("sobre-section", "sections/sobre.html");
loadSection("projetos-section", "sections/projetos.html");
loadSection("formacao-section", "sections/formacao.html");
loadSection("certificacoes-section", "sections/certificacoes.html");
loadSection("footer-section", "sections/footer.html");