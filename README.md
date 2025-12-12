# Contrato en Sepolia 🚀

Smart contract simple desplegado en la red de prueba Sepolia de Ethereum.

## 📝 Descripción

Este es un contrato inteligente básico que almacena y permite modificar una variable de texto llamada `nombre`. Fue creado como proyecto educativo para aprender el proceso completo de desarrollo y despliegue de smart contracts.

## 🔗 Contrato Desplegado

- **Dirección del contrato:** `0xC1f67Ad2cC26A30aA7345F25278a6947aEeFf0c5`
- **Red:** Sepolia Testnet
- **Explorador:** [Ver en Etherscan](https://sepolia.etherscan.io/address/0xC1f67Ad2cC26A30aA7345F25278a6947aEeFf0c5)

## 🛠️ Tecnologías Utilizadas

- **Solidity** ^0.8.19 - Lenguaje de programación para smart contracts
- **Hardhat** 2.27.2 - Framework de desarrollo
- **Ethers.js** - Biblioteca para interactuar con Ethereum
- **Alchemy** - Proveedor RPC para conexión a la blockchain
- **Dotenv** - Gestión de variables de entorno

## 📁 Estructura del Proyecto
```
mi-primer-contrato-sepolia/
├── contracts/
│   └── MiPrimerContrato.sol    # Smart contract principal
├── scripts/
│   └── deploy.js                # Script de despliegue
├── test/                        # Tests (opcional)
├── .env                         # Variables de entorno (NO SUBIR)
├── .env.example                 # Plantilla de variables
├── .gitignore                   # Archivos a ignorar en Git
├── hardhat.config.js            # Configuración de Hardhat
├── package.json                 # Dependencias del proyecto
└── README.md                    # Este archivo
```

## 🚀 Instalación

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn
- Anaconda (opcional, para entorno virtual)
- Wallet de Ethereum (Rabby, MetaMask)
- Cuenta en Alchemy
- Cuenta en Etherscan (para verificación)

### Pasos de instalación

1. **Clonar el repositorio:**
```bash
   git clone [URL-de-tu-repositorio]
   cd mi-primer-contrato-sepolia
```

2. **Instalar dependencias:**
```bash
   npm install
```

3. **Configurar variables de entorno:**
   
   Crea un archivo `.env` basado en `.env.example`:
```bash
   cp .env.example .env
```
   
   Completa con tus credenciales:
```
   SEPOLIA_RPC_URL=tu_url_de_alchemy
   PRIVATE_KEY=tu_clave_privada
   ETHERSCAN_API_KEY=tu_api_key_de_etherscan
```

4. **Compilar el contrato:**
```bash
   npx hardhat compile
```

5. **Desplegar en Sepolia:**
```bash
   npx hardhat run scripts/deploy.js --network sepolia
```

6. **Verificar en Etherscan:**
```bash
   npx hardhat verify --network sepolia [DIRECCION_DEL_CONTRATO]
```

## 💡 Uso del Contrato

### Funciones disponibles

**`nombre()`** - Variable pública
- Lee el nombre almacenado en el contrato
- Tipo: `string public`

**`cambiarNombre(string _nuevoNombre)`** - Función pública
- Permite cambiar el nombre almacenado
- Parámetros: `_nuevoNombre` (string)
- Solo requiere gas para ejecutarse

### Interactuar con el contrato

Puedes interactuar directamente desde Etherscan:

1. Ve a la [página del contrato en Etherscan](https://sepolia.etherscan.io/address/0xC1f67Ad2cC26A30aA7345F25278a6947aEeFf0c5)
2. Ve a la pestaña **"Contract"**
3. Usa **"Read Contract"** para leer el nombre
4. Usa **"Write Contract"** para cambiar el nombre (necesitas conectar tu wallet)

## 🔒 Seguridad

### ⚠️ IMPORTANTE - Variables de Entorno

- **NUNCA** subas el archivo `.env` a GitHub
- **NUNCA** compartas tu clave privada (`PRIVATE_KEY`)
- El archivo `.gitignore` debe incluir `.env`
- Usa `.env.example` como plantilla pública

### Verificación

El `.gitignore` debe contener:
```
node_modules/
.env
cache/
artifacts/
```

## 📦 Dependencias

Las dependencias principales están listadas en `package.json`:
```json
{
  "devDependencies": {
    "@nomicfoundation/hardhat-toolbox": "^5.0.0",
    "hardhat": "^2.22.0",
    "dotenv": "^17.2.3"
  }
}
```

Para instalar todas las dependencias:
```bash
npm install
```

## 👨‍💻 Autor

**Juan Alvarado**
- Proyecto académico de aprendizaje Web3
- Red: Sepolia Testnet

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 🙏 Agradecimientos

- [Hardhat Documentation](https://hardhat.org/docs)
- [Ethereum Documentation](https://ethereum.org/developers)
- [Alchemy](https://www.alchemy.com/)
- [Etherscan](https://etherscan.io/)

---

**Nota:** Este es un proyecto educativo desplegado en una red de prueba. Los ETH utilizados no tienen valor real.
