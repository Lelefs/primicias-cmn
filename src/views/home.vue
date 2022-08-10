<template>
  <div>
    <div class="header">
      <h2>Supervisões: {{ qtdSupervisoes }} | Células: {{ qtdCelulas }}</h2>
    </div>
    <div>{{ celulas }}</div>
  </div>
</template>

<script>
import { formatDate } from '@/utils/formatValues';
import { celulas } from '@/data/celulas';

export default {
  name: 'Inicio',

  data: () => ({
    celulas,
    dataAtual: formatDate(new Date()),
  }),

  computed: {
    qtdSupervisoes() {
      return celulas.length;
    },

    qtdCelulas() {
      let qtd = 0;

      celulas.forEach((s) => {
        qtd += s.celulas.length;
      });

      return qtd;
    },
  },
};
</script>

<style lang="scss">
.header {
  padding: 1rem;
  text-align: center;
}
</style>
