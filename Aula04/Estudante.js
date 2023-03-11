class estudante{
    constructor(nome, email, RA , curso, disciplinas){
        this.nome =  nome;
        this.email = email;
        this.RA = RA;
        this.curso = curso;
        this.disciplinas = disciplinas;

    }
}

    const estudante1 = new estudante("Otávio", "otavio.gmail.com", "123456","ADS", ["IHC", "Inglês", "SO", "Prog.Web"]);

    const estudante2 = new estudante("João", "joão.gmail.com", "654321","Gestão", ["G.Equipes", "Inglês", "ADM.Geral", "G.Pessoas"]);

    console.log(estudante1)
    console.log(estudante2)

