# Declaração de Tipos para o Fluig

O ambiente nativo de desenvolvimento do Fluig é o Eclipse Luna, que é uma IDE muito antiga e por isso há vários
problemas com ela.

Para facilitar o desenvolvimento no Visual Studio Code eu criei essa declaração de tipos, assim é possível aproveitar
o auto-complete.

As declarações ainda estão incompletas. Conforme vou precisando de mais itens ou descubro novos itens olhando a
documentação eu vou adicionando aqui.

Sinta-se à vontade para ajudar a complementar o projeto com PR.

## Como instalar

Baixe a [Última Release](https://github.com/fluiggers/fluig-declaration-type/releases/latest) e descompacte os
arquivos `fluig.d.ts` e `jsconfig.json` para o diretório principal do seu projeto Fluig.

A extensão [Fluig - Extensão para Desenvolvimento no VSCode](https://marketplace.visualstudio.com/items?itemName=Fluiggers.fluiggers-fluig-vscode-extension)
ela possuí um comando simplificado para realizar a instalação dessa biblioteca de tipos.

## Contribuição

Sinta-se livre para fazer PRs para inserir novas descrições.

Edite as declarações da pasta `src`, pois o arquivo `fluig.d.ts` será gerado concatenando todas as declarações desta pasta.

## Fontes de Documentação do Fluig

Os principais documentos utilizados para elaborar essas declarações de tipos vieram de:

- [Documentação Oficial do Fluig](https://tdn.totvs.com/display/public/fluig/TOTVS+FLUIG)
- [Style Guide](https://style.fluig.com/)
- [Javadoc for Fluig - SDK - API 1.8.1](https://api.fluig.com/old/sdk/index.html)
- [API REST](https://api.fluig.com/latest/index.html)
- [API REST Antiga](https://api.fluig.com/old/)
