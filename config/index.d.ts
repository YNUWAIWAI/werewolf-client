interface config {
  dest: string
  env: 'production' | 'development'
}
declare const config: config

export default config
