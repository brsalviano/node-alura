class Tabelas {
  init(conexao) {
    this.conexao = conexao;

    this.criarAtendimentos();
  }

  criarAtendimentos() {
    let sql = 'CREATE TABLE IF NOT EXISTS atendimentos (';
    sql += 'id int NOT NULL AUTO_INCREMENT, ';
    sql += 'cliente varchar(50) NOT NULL, ';
    sql += 'pet varchar(20), ';
    sql += 'servico varchar(20) NOT NULL, ';
    sql += 'status varchar(20) NOT NULL, ';
    sql += 'observacoes TEXT, ';
    sql += 'PRIMARY KEY(id))';

    this.conexao.query(sql, (erro) => {
      if (erro) {
        console.error(erro);
      } else {
        console.log('Tabela Atendimentos criada com sucesso!');
      }
    });
  }
}

module.exports = new Tabelas();
