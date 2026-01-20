# EG Estética Automotiva - Website

Site profissional e moderno para empresa de estética automotiva, funilaria e pintura.

## 🚀 Características

- **Design Moderno e Responsivo**: Totalmente adaptável para desktop, tablet e mobile
- **Animações Suaves**: Efeitos visuais profissionais em toda a página
- **Seções Completas**:
  - Hero Section impactante
  - Catálogo de serviços detalhado
  - Sobre a empresa com estatísticas animadas
  - Galeria de trabalhos
  - Depoimentos de clientes (slider automático)
  - Formulário de contato funcional
  
- **Recursos Adicionais**:
  - Menu mobile responsivo
  - Botão flutuante de WhatsApp
  - Scroll suave entre seções
  - Efeitos de parallax
  - Contadores animados
  - Transições e hover effects

## 📁 Estrutura do Projeto

```
Xandi/
├── index.html       # Página principal
├── styles.css       # Estilos e animações
├── script.js        # Interatividade e funcionalidades
└── README.md        # Documentação
```

## 🎨 Tecnologias Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (Vanilla)
- Font Awesome (ícones)
- Google Fonts (Poppins)

## 🔧 Personalização

### Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #e74c3c;
    --secondary-color: #2c3e50;
    --accent-color: #f39c12;
}
```

### Informações de Contato
Atualize em `index.html` na seção de contato:
- Endereço
- Telefones
- E-mail
- Horário de funcionamento
- Links de redes sociais

### WhatsApp
Altere o número do WhatsApp no botão flutuante:
```html
<a href="https://wa.me/55SEU_NUMERO_AQUI" class="whatsapp-float">
```

## 📱 Funcionalidades do Formulário

O formulário de contato está configurado para:
- Validação de campos
- Mensagem de confirmação
- Reset automático após envio

Para integrar com backend ou serviço de e-mail, edite a função no `script.js`:
```javascript
contatoForm.addEventListener('submit', (e) => {
    // Adicione aqui sua lógica de envio
});
```

## 🖼️ Adicionando Imagens Reais

Para substituir os placeholders por imagens reais:

1. Adicione suas imagens na pasta do projeto
2. Substitua os elementos `.image-placeholder` e `.galeria-placeholder`
3. Use lazy loading para melhor performance:
```html
<img data-src="caminho/imagem.jpg" alt="Descrição">
```

## 🚀 Como Usar

1. Abra o arquivo `index.html` em qualquer navegador moderno
2. O site é estático e não requer servidor
3. Para desenvolvimento, use extensões como Live Server no VS Code

## 📊 Performance

- Design otimizado
- Animações CSS para melhor performance
- Lazy loading preparado
- Código minificável para produção

## 🎯 Próximos Passos Sugeridos

1. Adicionar imagens reais dos trabalhos
2. Integrar formulário com backend/e-mail
3. Adicionar Google Analytics
4. Implementar Google Maps na seção de contato
5. Criar sistema de galeria com lightbox
6. Adicionar mais depoimentos de clientes
7. Otimizar para SEO
8. Adicionar meta tags Open Graph
9. Implementar PWA (Progressive Web App)

## 📞 Suporte

Para dúvidas ou sugestões sobre o site, entre em contato através dos canais disponíveis na página.

---

**Desenvolvido para EG Estética Automotiva** 🚗✨
# EGEstetica