import Axios from 'axios';

export default Axios.create(
    {
        baseURL: 'https://api.unsplash.com',
        headers:
            {
                Authorization: 'Client-ID f2d2b01e295827f5bf63d4685738443db2400c9d279fba3d0ff982703ca4b936'
            }
    }
);
