function toggleMode() {
    const html = document.documentElement;

    //    if(html.classList.contains('light')) {
    //        html.classList.remove('light');
    //    } else {
    //        html.classList.add('light');
    //    }
                    // OU ENTÃO:

    // html.classList.toggle('light');
                    
                    // OU ENTÃO:

    html.classList.contains('light') ? html.classList.remove('light') : html.classList.add('light');

    const img = document.querySelector('#profile img');
    html.classList.contains('light') ? img.setAttribute('src', './assets/meuIcone.JPEG') : img.setAttribute('src', './assets/outroIcone.JPEG');
    
    if(html.classList.contains('light')) {
        img.setAttribute('alt', 'Foto de Diego, homem branco com cabelo preto, barba estilo cavanhaque e uma camisa branca com listras pretas e marrons.');
    } else {
        img.setAttribute('alt', 'Foto de Diego, homem branco com cabelo preto e mechas cor castanho, barba estilo cavanhaque e uma camisa amarela e óculos ciclope.');
    }
}