# Usuário 

* ID (PK)
* Email (unique)
* Senha (hash)
* Role (check in(user, admin))

# Página 

* ID (PK)
* Nome 
* UserIDs? (FK) -> mais de um usuário pode editar uma página de blog

# Publicação

* ID (PK)
* Título (not null)
* Status (check in (rascunho, publicado))
* PageId (FK)
