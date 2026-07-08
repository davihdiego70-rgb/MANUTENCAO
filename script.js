function showSection(sectionId) {
    const sections = ['home', 'services', 'tips', 'contact'];
    
    sections.forEach(id => {
        const section = document.getElementById(id);
        if (id === sectionId) {
            section.classList.remove('hidden');
            section.classList.add('fade-in');
        } else {
            section.classList.add('hidden');
            section.classList.remove('fade-in');
        }
    });
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const equipment = document.getElementById('equipment').value;
    const message = document.getElementById('message').value;
    
    const formData = {
        name: name,
        email: email,
        phone: phone,
        equipment: equipment,
        message: message,
        timestamp: new Date().toLocaleString('pt-BR')
    };
    
    console.log('Formulário enviado:', formData);
    
    alert('Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.');
    
    document.getElementById('contactForm').reset();
}

// Função para redirecionar ao WhatsApp
function redirectToWhatsApp() {
    // Número do WhatsApp (sem espaços, com código do país)
    const phoneNumber = '5531971060767'; // 55 = Brasil, 31 = DDD, resto = número
    
    // Mensagem padrão
    const message = 'Olá! Gostaria de solicitar um orçamento para manutenção de equipamentos eletrônicos.';
    
    // URL do WhatsApp com mensagem pré-preenchida
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Redireciona para WhatsApp
    window.open(whatsappUrl, '_blank');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Site carregado com sucesso!');
});
