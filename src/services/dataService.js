function sessionData() {
    const token = JSON.parse(sessionStorage.getItem('token'))
    const productId = JSON.parse(sessionStorage.getItem('productId'))
    return { token, productId }
}


export async function getUser() {
    const browserData = sessionData()
    const requestOption = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${browserData.token}`,
        },
    }
    const response = await fetch(
        `${process.env.REACT_APP_HOST}/600/users/${browserData.productId}`,
        requestOption
    );
    if (!response.ok) {
        const errorMessage = { message: response.statusText, status: response.status };
        throw errorMessage;
    }
    const data = await response.json();
    return data;
}


export async function getUserOrder() {
    const browserData = sessionData()
    const requestOption = {
        method: 'GET',
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${browserData.token}` }
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${browserData.productId}`, requestOption)
    if (!response.ok) {
        const errorMessage = { message: response.statusText, status: response.status };
        throw errorMessage;
    }
    const data = await response.json();
    return data;
}



export async function createOrder(cartList, total, user) {
    const browserData = sessionData();
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            name: user.name,
            email: user.email,
            id: user.id,
        },
    };

    const requestOption = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${browserData.token}`,
        },
        body: JSON.stringify(order),
    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, requestOption);
    if (!response.ok) {
        const errorMessage = { message: response.statusText, status: response.status };
        throw errorMessage;
    }

    const data = await response.json();
    return data;
}
