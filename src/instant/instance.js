import axios from "axios";

export const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    timeout:1000
})

instance.interceptors.request.use(
    function(config){
        // console.log(config)
        if(config.url=="/movie/popular" && config.method=="get")
        {
            config.headers.Authorization="token"
        }
        return config ;
    },
    function(error){
        return Promise.reject(error) ;
    }
)


instance.interceptors.response.use(
    function(response){
        // console.log(response)
        return response ;
    },
    function(error){
        return Promise.reject(error) ;
    }
)