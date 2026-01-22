const myRoutes = [
  { path: '/', component: () => import('../pages/homePage.vue') },
  { path: '/summoner', component: () => import('../pages/summonerPage.vue') },
]

export default myRoutes
