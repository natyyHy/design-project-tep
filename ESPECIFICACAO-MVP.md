**RF-01 (Inputs do Projeto)**
* Ator: Designer (Usuário).
* Entradas: Seletores (dropdowns) de 'Público-alvo' (ex: Adultos) e 'Temática visual' (ex: Clean), além de um campo de texto livre.
* Cenário de Sucesso: Dado que a pessoa seleciona as opções e envia, Quando a IA processa, Então exibe os insumos nos blocos à direita.
* Cenário de Falha: Dado que o usuário tenta enviar sem preencher a temática, Quando clica no botão, Então o sistema bloqueia e pede o preenchimento.


**RF-02 (Curadoria de Paletas)**
* Entradas: Temática visual processada.
* Saída Observável: Exibição de paleta neutra e cores principais com opção de copiar o código hexadecimal.
* Cenário de Sucesso: Dado que os inputs são válidos, Quando a curadoria é feita, Então a paleta de 5 tons é exibida com contraste adequado.
* Cenário de Falha: Dado que o serviço de geração falha, Quando solicitado, Então exibe aviso de erro sem travar a interface.
