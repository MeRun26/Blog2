npm run server
для запуска JSON server

npm run start
для запуска проекта

Области хранения данных:

- база данных на json-server
- BFF
- redux store

Сущности приложения:

- Пользователь: БД (список пользователей), BFF (сессия текущего), стор (отображение в браузере)
- Роль пользователя: БД (список ролей), BFF (сессия пользователя с ролью), стор (использовние на клиенте)
- Статья: БД(список статей), стор(отображение в браузере)
- Комментарий: БД(список комментариев), стор(отображение в браузере)

Таблицы БД:

- Пользователи - users: id/login/password/registred_at/role_id
- Роли - roles: id/name
- Статьи - posts: id/title/image_url/content/published_at
- Комментарии - comments: id/author_id/post_id/content

Схема состояния BFF:

- сессия текущего пользователя: login/password/role

Схема для Redux Store(на клиенте):

- user: id/login/roleId
- posts: массив post: id/title/imageUrl/publishedAt/commentsCount
- post: id/title/imageUrl/content/publishedAt/comments: массив comment: id/author/content/publishedAt
- users: массив user: id/login/registredAt/role
