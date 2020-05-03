module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[
    [
      'module-resolver',
      {
        root:['./src'],
        alias:{
          '@/utils':'./src/utils',
          '@/assets':'./src/assets',
          '@/pages':'./src/pages',
          '@/models':'./src/models',
          '@/config':'./src/config',
          '@/components':'./src/components',
          '@/navigator':'./src/navigator'
        }
      }
    ]
  ]
};
