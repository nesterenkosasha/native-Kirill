function ApiCreator(baseUrl) {
    const fetchCreator = method => (url, options) => fetch(`http://${baseUrl}/${url}`, {
        method,
        ...options,
    });
    
    return {
        get: fetchCreator('GET'),
        post: fetchCreator('POST'),
        patch: fetchCreator('PATCH'),
        delete: fetchCreator('DELETE'),
        put: fetchCreator('PUT'),
    };
} 