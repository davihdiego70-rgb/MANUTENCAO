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
    
    // 1. Enviar para WhatsApp
    enviarWhatsApp(formData);
    
    // 2. Enviar email automático
    enviarEmail(formData);
    
    // Mostrar mensagem de sucesso
    alert('Obrigado! Sua mensagem foi enviada com sucesso via WhatsApp e email. Entraremos em contato em breve.');
    
    // Limpar o formulário
    document.getElementById('contactForm').reset();
}

// Função para enviar mensagem para WhatsApp
function enviarWhatsApp(formData) {
    const phoneNumber = '5531971060767'; // +55 31 97106-0767
    
    // Montar a mensagem com as informações do formulário
    const whatsappMessage = `
*Novo Contato - Manutenção de Equipamentos*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Tipo de Equipamento:* ${formData.equipment}
*Descrição do Problema:* ${formData.message}
*Data/Hora:* ${formData.timestamp}
    `.trim();
    
    // URL do WhatsApp com mensagem pré-preenchida
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abre em nova aba
    window.open(whatsappUrl, '_blank');
    
    console.log('Mensagem enviada para WhatsApp');
}

// Função para enviar email automático
function enviarEmail(formData) {
    // Email para o qual será enviada a mensagem
    const destinatario = 'davihdiego70@gmail.com';
    
    // Montar assunto do email
    const assunto = `Novo Contato - ${formData.name} - ${formData.equipment}`;
    
    // Montar corpo do email
    const corpoEmail = `
Olá Davih Diego,

Você recebeu um novo contato através do formulário de contato do site.

--- DADOS DO CONTATO ---

Nome: ${formData.name}
Email: ${formData.email}
Telefone: ${formData.phone}
Tipo de Equipamento: ${formData.equipment}

--- DESCRIÇÃO DO PROBLEMA ---

${formData.message}

--- DATA E HORA ---

${formData.timestamp}

---

Este é um email automático do seu site de Manutenção de Equipamentos Eletrônicos.
Por favor, entre em contato com o cliente pelo telefone ou email fornecido acima.
    `.trim();
    
    // Criar URL mailto com assunto e corpo
    const emailUrl = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpoEmail)}`;
    
    // Abrir cliente de email padrão
    window.location.href = emailUrl;
    
    console.log('Email aberto no cliente padrão');
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
