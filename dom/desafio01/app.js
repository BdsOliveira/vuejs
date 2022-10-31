new Vue({
    el: "#desafio",
    data: {
        nome: "Bruno Oliveira",
        idade: 26,
        linkImg: "https://img.freepik.com/fotos-gratis/foto-de-grande-angular-de-uma-unica-arvore-crescendo-sob-um-ceu-nublado-durante-um-por-do-sol-cercado-por-grama_181624-22807.jpg?w=2000"
    },
    methods: {
        multiplicaIdade(quant){
            return this.idade * quant
        },
        randomico(){
            return Math.random()
        },
    },
})