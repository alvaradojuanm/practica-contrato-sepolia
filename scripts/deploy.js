const hre = require("hardhat");

async function main() {
  console.log("🚀 Iniciando despliegue del contrato...");

  // Obtener el contrato
  const MiPrimerContrato = await hre.ethers.getContractFactory("MiPrimerContrato");
  
  // Desplegar el contrato
  console.log("📝 Desplegando contrato...");
  const contrato = await MiPrimerContrato.deploy();
  
  // Esperar a que se confirme el despliegue
  await contrato.waitForDeployment();
  
  // Obtener la dirección del contrato desplegado
  const direccionContrato = await contrato.getAddress();
  
  console.log("✅ Contrato desplegado exitosamente!");
  console.log("📍 Dirección del contrato:", direccionContrato);
  
  // Leer el valor inicial de la variable "nombre"
  const nombreInicial = await contrato.nombre();
  console.log("👤 Valor inicial de 'nombre':", nombreInicial);
  
  // Link a Etherscan
  console.log("🔗 Ver en Etherscan:");
  console.log(`https://sepolia.etherscan.io/address/${direccionContrato}`);
}

// Ejecutar el script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("❌ Error:", error);
    process.exit(1);
  });