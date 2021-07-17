<div class="cta">
    <img src="/assets/logo_cream.svg" alt="Abell Design" />    

    <p class="deck">{deck}</p>
    <div class="credit">
        <p>{client}</p>
        <p>{project}</p>
    </div>
</div>

<style>
    .cta {
        width: 100vw;
        height: 100vh;
        background: url("cta.jpg") no-repeat center center fixed; 
        background-size: cover;
        color: white;
        position: relative;
    }

    img {
        width: 200px;
        display: block;
        top: 40px;
        position: absolute;
        left: 40px;
        filter: drop-shadow(2px 2px 2px rgb(0 0 0 / 0.4));
    }
    p {
        text-shadow: 2px 2px rgb(0 0 0 / 0.4);
    }

    .deck {
        position: absolute;
        bottom: 40px;
        font-size: 30px;
        left: 40px;
        width: 40vw;

    }
    .credit {
        position: absolute;
        bottom: 40px;
        right: 40px;
        text-align: right;
    }

    @media (max-width: 767px) {
        svg, .deck, .credit {
            position: static;
            padding: 40px 0 0 40px;
            text-align: left;
        }

        .deck {
            width: 80vw;
        }
        .cta {
            max-height: 500px;
        }
    }
</style>

<script>
export let deck;
export let client;
export let project;
</script>