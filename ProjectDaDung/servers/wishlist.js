const fetchJson = async (url, options = {}) => {
    const token = localStorage.getItem('auth_token');
    const headers = {
        ...(options.headers || {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {})
    };

    const res = await fetch(url, {
        ...options,
        headers
    });
    const text = await res.text();
    const data = text ? JSON.parse(text) : null;

    if (!res.ok) {
        throw new Error(data?.message || 'Request failed');
    };
    return data;
}
export const getWishlist = async () => {
    try {
        return await fetchJson('/api/wishlist');
    } catch (error) {
        console.error("Error fetching wishlist:", error);
        return [];
    }
};
export const DeleteWishlistAll = async () => {
    try {
        return await fetchJson('/api/wishlist', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error("Error deleting wishlist:", error);
        return null;
    }
};

export const addToWishlist = async (productId) => {
    try {
        return await fetchJson(`/api/wishlist/${productId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        });
    } catch (error) {
        console.error("Error adding to wishlist:", error);
        return null;
    }
};
export const deleteFromWishlist = async (productId) => {
    try {
        return await fetchJson(`/api/wishlist/${productId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error("Error deleting from wishlist:", error);
        return null;
    }
};
export const getWishlistItemStatus = async (productId) => {
    try {
        return await fetchJson(`/api/wishlist/${productId}/status`);
    }
    catch (error) {
        console.error("Error getting wishlist item status:", error);
        return null;
    }
};
