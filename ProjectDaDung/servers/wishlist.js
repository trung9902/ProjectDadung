const fetchJson = async (url, options = {}) => {
    const res = await fetch(url, options);
    const data = await res.json();
    if (!res.ok) {
        throw new Error(data.message || 'Request failed');
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
        return await fetchJson('/api/wishlist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId })
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
        return await fetchJson(`/api/wishlist/status/${productId}`);
    }
    catch (error) {
        console.error("Error getting wishlist item status:", error);
        return null;
    }
};
