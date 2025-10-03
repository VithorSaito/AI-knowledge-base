<h1>ChatBot OpenAI</h1>

O projeto consiste no desenvolvimento de um fluxo completo de funcionamento para um chatbot baseado em inteligência artificial, alimentado por uma base de conhecimento customizada.

<img width="1507" height="788" alt="Captura de tela 2025-10-03 111438" src="https://github.com/user-attachments/assets/f5cd8a9b-a5cb-4cc9-b6d9-fa8ec494be2b" />

Por se tratar de um projeto <strong> experimental </strong>, optou-se por não utilizar serviços gerenciados da AWS (como Aurora ou ElasticSearch), devido ao custo associado.
Em vez disso, foi provisionada uma instância EC2 configurada com PostgreSQL e a extensão pgvector, permitindo armazenar e consultar embeddings de forma eficiente.

Outro ponto de decisão arquitetural foi priorizar a simplicidade e otimização de custos em detrimento da performance, adotando a versão mais básica do fluxo conversacional do chatbot.

<h2>End points</h2>

```/send_informations```
Endpoint responsável por receber as mensagens enviadas pelo usuário, processando as dúvidas e retornando a resposta gerada pelo modelo.

```/knowledge_base```
Endpoint utilizado para ingestão de documentos e arquivos que serão integrados à base de conhecimento do chatbot, permitindo enriquecer as respostas de forma contextualizada.
