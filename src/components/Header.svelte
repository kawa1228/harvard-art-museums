
<svelte:window on:hashchange={handle_hashchange} on:scroll={handle_scroll} />

<header class:visible="{visible}">
    <nav>
        <Icon name="/svg/svelte-logo.svg#icon" size={30}/>
        <ul>
            <li>
                <a href="/" use:link>Home</a>
            </li>
            <li>
                <a href="/lucky" use:link>Lucky</a>
            </li>
            <li>
                <a href="/images" use:link>Images</a>
            </li>
        </ul>
    </nav>
</header>

<script lang="typescript">
    import {link} from 'svelte-spa-router';
	import Icon from "../components/Icon.svelte";

    let visible: Boolean = true;

    let hash_changed: Boolean = false;
    function handle_hashchange() {
        hash_changed = true;
    }

    let last_scroll: Number = 0;
    function handle_scroll() {
        const scroll = window.pageYOffset;
		if (!hash_changed) {
			visible = (scroll < 50 || scroll < last_scroll);
        }
		last_scroll = scroll;
		hash_changed = false
    }

</script>

<style lang="scss">
    header {
        position: fixed;
        height: var(--nav-h);
        width: 100vw;
        padding: 0 var(--side-nav);
        background-color: #fff;
        box-shadow: 0 -0.4rem 0.9rem 0.2rem rgba(0,0,0,.5);
        transform: translate(0,calc(-100% - 1rem));
        transition: transform 0.2s;

        &.visible {
            transform: none;
        }
    }
    nav {
        width: 100vw;
        height: var(--nav-h);
        padding: 0 var(--side-nav) 0 var(--side-nav);
        display: flex;
        justify-content: space-between;
        align-items: center;

		position: fixed;
		top: 0;
		left: 0;

        ul {
            display: flex;
        }

        li {
            a {
                padding: 0 .8rem;
            }
        }
    }
</style>
