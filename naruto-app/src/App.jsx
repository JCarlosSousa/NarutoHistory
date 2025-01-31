import React, { useState } from 'react';

function App() {
  // Lista de histórias do Naruto
  const stories = [
    {
      title: "Origem do Naruto",
      content: "Naruto Uzumaki nasceu como um jinchūriki, o portador da Nove-Caudas (Kurama). Desde jovem, ele foi rejeitado pelos moradores de Konoha por causa do demônio selado dentro dele. Apesar disso, Naruto sonhava em se tornar Hokage, o líder supremo da vila, para ser reconhecido por todos."
    },
    {
      title: "Time 7",
      content: "Naruto, Sasuke e Sakura formaram o Time 7 sob a liderança de Kakashi Hatake. Eles passaram por muitos desafios juntos, incluindo missões perigosas e batalhas épicas. O vínculo entre os três membros do time foi crucial para o desenvolvimento de suas habilidades e personalidades."
    },
    {
      title: "Luta contra Pain",
      content: "Uma das batalhas mais marcantes de Naruto foi contra Pain, o líder da organização Akatsuki. Após a destruição de Konoha e a morte temporária de Naruto, ele conseguiu convencer Nagato (Pain) a trazer de volta à vida todos os habitantes da vila, sacrificando sua própria vida no processo."
    },
    {
      title: "Batalha Final - Naruto vs Sasuke",
      content: "Após anos de conflito, Naruto e Sasuke finalmente se enfrentaram em uma batalha épica no Vale do Fim. Ambos estavam determinados a provar suas filosofias de vida. No final, Naruto conseguiu redimir Sasuke, restaurando seu laço de amizade e encerrando o ciclo de ódio."
    }
  ];

  // Estado para controlar a história atual
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  // Estado para controlar o tema atual
  const [theme, setTheme] = useState('light');

  // Função para avançar para a próxima história
  const nextStory = () => {
    setCurrentStoryIndex((prevIndex) => 
      prevIndex + 1 < stories.length ? prevIndex + 1 : 0
    );
  };

  // Função para voltar para a história anterior
  const previousStory = () => {
    setCurrentStoryIndex((prevIndex) => 
      prevIndex - 1 >= 0 ? prevIndex - 1 : stories.length - 1
    );
  };

  // Função para mudar o tema
  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  // Estilos baseados no tema selecionado
  const themes = {
    light: {
      backgroundColor: '#f4f4f4',
      buttonColor: '#007bff',
      buttonHover: '#0056b3',
      titleColor: '#333', // Cor do título no Light Mode
    },
    dark: {
      backgroundColor: '#333',
      buttonColor: '#ff6347',
      buttonHover: '#cc0000',
      titleColor: '#fff', // Cor do título no Dark Mode
    },
    kurama: {
      backgroundColor: '#ff4500',
      buttonColor: '#ff8c00',
      buttonHover: '#b22222',
      titleColor: '#fff', // Cor do título no Kurama Mode
    },
    sasuke: {
      backgroundColor: '#9e0dad',
      buttonColor: '#6a0dad',
      buttonHover: '#4b0082',
      titleColor: '#fff', // Cor do título no Sasuke Mode
    },
    sakura: {
      backgroundColor: '#ffa0e1',
      buttonColor: '#ff69b4',
      buttonHover: '#ff1493',
      titleColor: '#333', // Cor do título no Sakura Mode
    },
  };

  const currentTheme = themes[theme];

  return (
    <div style={{ ...styles.container, backgroundColor: currentTheme.backgroundColor }}>
      {/* Título com cor dinâmica */}
      <h1 style={{ ...styles.title, color: currentTheme.titleColor }}>Histórias do Naruto</h1>

      {/* Exibição da história atual */}
      <div style={styles.storyBox}>
        <h2 style={styles.storyTitle}>{stories[currentStoryIndex].title}</h2>
        <p style={styles.storyContent}>{stories[currentStoryIndex].content}</p>
      </div>

      {/* Botões de navegação */}
      <div style={styles.buttonContainer}>
        <button onClick={previousStory} style={{ ...styles.button, backgroundColor: currentTheme.buttonColor }}>
          Anterior
        </button>
        <button onClick={nextStory} style={{ ...styles.button, backgroundColor: currentTheme.buttonColor }}>
          Próxima
        </button>
      </div>

      {/* Seleção de temas */}
      <div style={styles.themeSelector}>
        <button 
          onClick={() => toggleTheme('light')} 
          style={{ ...styles.themeButton, backgroundColor: themes.light.buttonColor }}
        >
          Light Mode
        </button>
        <button 
          onClick={() => toggleTheme('dark')} 
          style={{ ...styles.themeButton, backgroundColor: themes.dark.buttonColor }}
        >
          Dark Mode
        </button>
        <button 
          onClick={() => toggleTheme('kurama')} 
          style={{ ...styles.themeButton, backgroundColor: themes.kurama.buttonColor }}
        >
          Kurama Mode
        </button>
        <button 
          onClick={() => toggleTheme('sasuke')} 
          style={{ ...styles.themeButton, backgroundColor: themes.sasuke.buttonColor }}
        >
          Sasuke Mode
        </button>
        <button 
          onClick={() => toggleTheme('sakura')} 
          style={{ ...styles.themeButton, backgroundColor: themes.sakura.buttonColor }}
        >
          Sakura Mode
        </button>
      </div>
    </div>
  );
}

// Estilos inline
const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    transition: 'background-color 0.3s ease',
  },
  title: {
    marginBottom: '20px',
    fontSize: '2rem',
    transition: 'color 0.3s ease',
  },
  storyBox: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '20px auto',
    maxWidth: '600px',
  },
  storyTitle: {
    color: '#555', // Cor fixa para o título da história
    marginBottom: '10px',
    fontSize: '1.5rem',
  },
  storyContent: {
    color: '#333', // Cor fixa para o conteúdo da história
    fontSize: '16px',
    lineHeight: '1.5',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  themeSelector: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  themeButton: {
    padding: '10px 20px',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background-color 0.3s ease',
  },
};

export default App;