// Components
import Home from './routes/Home.svelte'
import Lucky from './routes/Lucky.svelte'
import Images from './routes/Images.svelte'
import NotFound from './routes/NotFound.svelte'

const routes = {
    // Exact path
    '/': Home,

    '/lucky': Lucky,

    '/images': Images,

    // Catch-all, must be last
    '*': NotFound,
}

export default routes
