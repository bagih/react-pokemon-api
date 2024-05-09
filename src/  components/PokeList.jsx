
const PokeList = ({ pokemonList, setSelectedPokemonName }) => {
    return (
        <div style={styles.gridContent}>
            {pokemonList.map((item) => {
                return (
                    <div 
                        key={item.name} 
                        style={styles.card}
                        onClick={() => { setSelectedPokemonName(item.name) }}
                    >
                        {item.name}
                    </div>
                )
            })
            }
        </div>
    )
}

const styles = {
    gridContent: {
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 16,
    },
    card: {
        padding: '16px 18px',
        backgroundColor: 'aquamarine',
        borderRadius: '8px',
        cursor: 'pointer',
    }
}

export default PokeList