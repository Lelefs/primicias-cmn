<template>
  <div>
    <div class="header">
      <h2>Supervisões: {{ supervisoes.length }} | Células: {{ celulas.length }}</h2>
    </div>
    <div class="py-8 px-4">
      <v-card max-width="1200" class="mx-auto card-sup">
        <v-card-title>
          <p>Mês atual: {{ nomeMes }}</p>
        </v-card-title>
        <v-card-text>
          <p class="text-h5 text--primary mb-6">Células que ainda não pagaram</p>
          <div class="div-card-content">
            <div v-for="(supervisao, i) in celulasPorSupervisao" :key="i">
              <p class="text-h6 text--primary">
                {{ supervisao.supervisor }}
              </p>
              <p v-for="(celula, index) in supervisao.celulas" :key="index" class="text--primary">
                {{ celula.nome }}
              </p>
            </div>
          </div>
        </v-card-text>
      </v-card>

      <v-card v-for="(supervisao, i) in celulasPorSupervisao" :key="i" max-width="1200" class="mx-auto mt-4 card-sup">
        <v-card-title>
          <p>Histórico supervisão: {{ supervisao.supervisor }}</p>
        </v-card-title>
        <v-card-text>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">Mês</th>
                  <th v-for="item in supervisao.celulas" :key="item.nome">
                    <p class="celula-table">{{ item.nome }}</p>
                    <p class="lider-table">{{ item.lider }}</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="mes in monthName" :key="mes">
                  <td>{{ mes }}</td>
                  <td class="text-center">0</td>
                  <td class="text-center">0</td>
                  <td class="text-center">0</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import { formatDate, getMonthName } from '@/utils/formatValues';
import { celulas, supervisoes } from '@/data/celulas';

export default {
  name: 'Inicio',

  data: () => ({
    celulas,
    dataAtual: formatDate(new Date()),
    supervisoes,
    monthName: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ],
  }),

  computed: {
    qtdCelulas() {
      return celulas.length;
    },

    nomeMes() {
      return getMonthName(new Date().getMonth());
    },

    celulasPorSupervisao() {
      const sup = [];

      supervisoes.forEach((s) => {
        sup.push({
          supervisor: s.supervisores,
          celulas: this.filtrarArray(celulas, s.supervisores),
        });
      });

      return sup;
    },
  },

  methods: {
    filtrarArray(array, sup) {
      const celulasagrupadas = array.filter((val) => val.supervisao === sup);
      return celulasagrupadas;
    },
  },
};
</script>

<style lang="scss">
.header {
  padding: 1rem;
  text-align: center;
}

.div-card-content {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;

  > div {
    width: 100%;
    max-width: 250px;
  }
}

.card-sup {
  background-color: #fff;
}

.celula-table {
  font-size: 1rem;
  color: #000;
  margin-bottom: 0 !important;
  text-align: center;
}

.lider-table {
  margin-bottom: 0.5rem !important;
  text-align: center;
}
</style>
