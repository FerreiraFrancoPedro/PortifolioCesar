document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Recupera os dados do formulário
    var nome = document.getElementById('nome').value;
    var data = document.getElementById('data').value;
    var objetivo = document.getElementById('objetivo').value;

    // Convertendo a data para o formato brasileiro (dd/mm/yyyy)
    var dataFormatada = new Date(data).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' });

    // Cria a mensagem para o WhatsApp
    var mensagem = "Olá César, meu nome é " + nome + ". Gostaria de agendar uma consultoria para o dia " + dataFormatada + " com o objetivo de " + objetivo + ". Obrigado!";

    // Codifica a mensagem para que possa ser passada como parâmetro na URL
    var mensagemCodificada = encodeURIComponent(mensagem);

    // URL do WhatsApp
    var urlWhatsApp = "https://wa.me/5535988193102?text=" + mensagemCodificada;

    // Abre o WhatsApp em uma nova aba com a mensagem personalizada
    window.open(urlWhatsApp, '_blank');
});