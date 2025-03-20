# Expense Tracker App

Un'applicazione web realizzata con **React** per la gestione delle spese personali. Il progetto utilizza **useReducer** per la gestione dello stato globale delle spese e **react-parallax** per un effetto visivo dinamico sulla homepage.

## 🚀 Tecnologie Utilizzate
- **React** con **useReducer** per la gestione dello stato
- **react-parallax** per effetti di parallasse nella homepage
- **Tailwind CSS** per lo stile (opzionale)

## 📦 Installazione

1. Clona il repository:
   ```sh
   git clone https://github.com/tuo-username/expense-tracker.git
   cd expense-tracker
   ```

2. Installa le dipendenze necessarie:
   ```sh
   npm install
   ```

3. Installa **react-parallax**:
   ```sh
   npm install react-parallax
   ```

4. Avvia il server di sviluppo:
   ```sh
   npm start
   ```

L'app sarà accessibile su `http://localhost:3000`.

---

## 🧩 Struttura del Progetto
```
expense-tracker/
│-- src/
│   │-- components/
│   │   │-- ExpenseForm.js
│   │   │-- ExpenseList.js
│   │   │-- ParallaxSection.js
│   │-- context/
│   │   │-- expenseReducer.js
│   │-- App.js
│   │-- index.js
│-- public/
│-- package.json
```

---

## 🎛️ Uso di useReducer per la gestione delle spese

Nel file `expenseReducer.js` abbiamo definito un **reducer** per gestire l'aggiunta e la rimozione delle spese.

```js
import { useReducer } from "react";

const initialState = [];

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.payload];
    case "REMOVE_EXPENSE":
      return state.filter(expense => expense.id !== action.payload);
    default:
      return state;
  }
};

export default expenseReducer;
```

Nella componente principale (`App.js`), usiamo `useReducer` per gestire lo stato:

```js
const [expenses, dispatch] = useReducer(expenseReducer, initialState);

const addExpense = (expense) => {
  dispatch({ type: "ADD_EXPENSE", payload: expense });
};
```

---

## 🌄 Implementazione di react-parallax

Abbiamo utilizzato `react-parallax` per un effetto dinamico nella homepage. Ecco un esempio del componente `ParallaxSection.js`:

```js
import { Parallax } from "react-parallax";

const ParallaxSection = () => {
  return (
    <Parallax bgImage="/images/background.jpg" strength={500}>
      <div className="h-96 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Benvenuto su Expense Tracker</h1>
      </div>
    </Parallax>
  );
};

export default ParallaxSection;
```

Lo importiamo poi in `App.js`:
```js
import ParallaxSection from "./components/ParallaxSection";

function App() {
  return (
    <>
      <ParallaxSection />
      {/* Altri componenti */}
    </>
  );
}
```

---

## 📌 Funzionalità dell'App
- Aggiunta e rimozione di spese con gestione tramite **useReducer**
- Effetto parallasse sulla homepage con **react-parallax**
- Interfaccia responsive e moderna

---

## 🤝 Contribuire
Se vuoi contribuire, effettua un fork del repository, crea un nuovo branch e invia una **pull request**.

---

## 📜 Licenza
Questo progetto è distribuito sotto **MIT License**.

