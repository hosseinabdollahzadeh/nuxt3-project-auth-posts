export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    console.log(body)
    try {
        const data = await $fetch('http://laravel9-project-api-auth-posts.test/api/register', {
            method: 'POST',
            body: body,
            headers: {
                'Accept': 'application/json'
            }
        })

        setCookie(event, 'token', data.token, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/'
        })
        return data.user
    }catch (error){
        return error
    }
})