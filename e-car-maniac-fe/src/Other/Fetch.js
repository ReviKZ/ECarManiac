/**
 * Universal fetch for data transfer [UNFINISHED]
 * @param {string} type "get" or "post" currently, it will be extended to "update", "put", "delete"
 * @param {string} endpoint The backend endpoint. E.g.: if you want to list the cars by it's id: "id"
 * @param {any} payload Usually the body of a "post" or "update" or "put" request. For "delete" and "get" leave it blank
 */
async function Fetch(type, endpoint, payload) {
    let response;

    if (type === "get") {
        response = await fetch(
            `https://localhost:4001/api/${endpoint}`, {
            method: "GET",
        }
        );
    }

    if (type === "post") {
        response = await fetch(
            `https://localhost:4001/api/${endpoint}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        }
        );
    }

    if (type === "delete") {
        response = await fetch(
            `https://localhost:4001/api/${endpoint}`, {
            method: "DELETE",
        }
        );
    }

    if (!response.ok) {
        return false;
    }

    return response.json();

}

export default Fetch;