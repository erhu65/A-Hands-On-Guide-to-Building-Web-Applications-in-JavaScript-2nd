

exports.config = {
    db_config: {
        host: "172.20.10.4",
        user: "root",
        password: "admin123",
        database: "PhotoAlbums",

        pooled_connections: 125,
        idle_timeout_millis: 30000
    },

    static_content: "../static/"
};

