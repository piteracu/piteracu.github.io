const targets = document.querySelectorAll('[data-target]')

const content = document.querySelectorAll('[data-content]')


targets.forEach(target => {
   
    target.addEventListener('click', () => {


        content.forEach(c => {
            c.classList.remove('active')
        })

        const t = document.querySelector(target.dataset.target)
        t.classList.add('active')

    })
})



document.getElementById('btn_magico').addEventListener('click', function(){
    document.getElementById('magico').innerHTML = "Mas info de mi.....Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus, turpis a elementum consequat, diam mi laoreet lorem, nec mattis leo purus id erat. Proin erat ligula, semper id iaculis eget, tincidunt id neque. Maecenas at libero at odio convallis ullamcorper ac luctus justo. Pellentesque ac ligula justo. Ut ullamcorper tellus id aliquet porttitor. Aliquam nisi leo, bibendum sed aliquam at, lacinia eget erat. Etiam a mollis diam, et hendrerit leo. Pellentesque iaculis ligula eu pharetra dignissim. Sed scelerisque erat sit amet pretium scelerisque. Nunc id sapien est. Praesent sed ultrices orci, et pretium purus. Suspendisse ornare dictum turpis a pulvinar. Maecenas orci nunc, suscipit vel dignissim malesuada, tempus sit amet ante. Nam facilisis est augue, eget fringilla nibh fringilla in. In vel diam at arcu suscipit dictum. Mauris dapibus ligula nec massa pretium interdum"
})
