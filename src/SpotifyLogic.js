
export const getTokenFromURL= () =>{
    return window.location.hash
    .substring(1).split("&")
    .reduce((initial, item)=>{
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])
        return initial
    }, {} )
}






const endpoint = "https://accounts.spotify.com/authorize"
const clientID = "45f4ce7799874a0b8504a5e95cca03d4"
const redirectUri = "http://localhost:3000/"
const scopes = ["user-read-currently-playing",
"user-read-recently-played",
"user-read-playback-state",
"user-top-read",
"user-modify-playback-state"
]

export const loginurl = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&show_dialog=true`