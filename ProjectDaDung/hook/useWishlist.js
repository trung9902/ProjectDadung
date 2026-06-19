import { useState, useEffect, useCallback } from 'react'
import { getWishlist, DeleteWishlistAll, addToWishlist, deleteFromWishlist, getWishlistItemStatus } from '../servers/wishlist'
export const useWishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                const data = await getWishlist();
                setWishlist(data);
            }
            catch (err) {
                setError(err.message || 'Failed to fetch wishlist');
            }
            finally {
                setLoading(false);
            }
        };
        fetchWishlist();
    }, [wishlist]);
    return { wishlist, loading, error };
}
export const useDeleteWishlistAll = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteWishlist = useCallback(async () => {
        setLoading(true);
        try {
            await DeleteWishlistAll();
        }
        catch (err) {
            setError(err.message || 'Failed to delete wishlist');
        }
        finally {
            setLoading(false);
        }
    }, []);

    return { deleteWishlist, loading, error };
}
export const useAddToWishlist = (productId) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const addProductToWishlist = useCallback(async () => {
        setLoading(true);
        try {
            await addToWishlist(productId);
        }
        catch (err) {
            setError(err.message || 'Failed to add product to wishlist');
        }
        finally {
            setLoading(false);
        }
    }, [productId]);
    return { addProductToWishlist, loading, error };
}
export const useDeleteFromWishlist = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const deleteProductFromWishlist = useCallback(async (productId) => {
        setLoading(true);
        try {
            await deleteFromWishlist(productId);
        }
        catch (err) {
            setError(err.message || 'Failed to delete product from wishlist');
        }
        finally {
            setLoading(false);
        }

    }, []);
    return { deleteProductFromWishlist, loading, error };
}
export const useGetWishlistItemStatus = () => {
    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const getWishlistStatus = async (productId) => {
            setLoading(true);
            try {
                const itemStatus = await getWishlistItemStatus(productId);
                setStatus(itemStatus);
            }
            catch (err) {
                setError(err.message || 'Failed to get wishlist item status');
            }
            finally {
                setLoading(false);
            }
        };
        getWishlistStatus();
    }, []);
    return { status, loading, error };
}
