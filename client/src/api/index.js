// vous pouvez mettre vos fonctions d'accès à l'API ici par exemple
class API 
{
    static URL = 'http://localhost:3344';

    // Fonctions utilitaires internes

    static fetcher(url) {       
        return API.fetcher(API.URL + url, 'GET');
    }

    static fetcher(url, method) {
        return fetch(API.URL + url, {method : method, mode : 'cors'})
            .then((response) => {
                return response.json()
            })
            .catch(err => { console.log("Fetching error : " + url + "\n" + err) });
    }

    static poster(url, json) {
        return fetch(API.URL + url, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(json)
        })
        .then((response) => {
            return response.json();
        })
        .catch(err => { console.log("Fetching error : " + url + "\n" + err) });
    }

    // Fonctions utilitaires externes

    // User

    static getUsers() {
        return API.fetcher("/user");
    }

    static getUserById(id) {
        return API.fetcher("/user/" + id);
    }

    static addUser(name) {
        return API.poster("/user", { name: name });
    }

    static removeUser(id) {
        return API.fetcher("/user/" + id, "DELETE");
    }

    // Author

    static getAuthors() {
        return API.fetcher("/author");
    }

    static getAuthorById(id) {
        return API.fetcher("/author/" + id);
    }

    static addAuthor(firstname, lastname) {
        return API.poster("/author", { firstname: firstname, lastname: lastname });
    }

    static removeAuthor(id) {
        return API.fetcher("/author/" + id, "DELETE");
    }

    // Book

    static getBooks() {
        return API.fetcher("/book");
    }

    static addBook(authorId, title) {
        return API.poster("/author/" + authorId + "/book", { title: title });
    }

    static getBookById(id) {
        return API.fetcher("/book/" + id);
    }

    static getBooksByAuthor(id) {
        return API.fetcher("/author/" + id + "/book");
    }

    static getBooksByUser(id) {
        return API.fetcher("/user/" + id + "/book");
    }

    static assignBookToUser(bookId, userId) {
        return API.fetcher("/user/" + userId + "/book/" + bookId, "PUT");
    }

    static removeBook(id) {
        return API.fetcher("/book/" + id, "DELETE");
    }
}

export default API;
