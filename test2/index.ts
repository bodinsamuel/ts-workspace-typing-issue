import {startHttpServer } from 'test-ts-workspace-1/type'

startHttpServer({
  port: 8000,
  uses: {
    'foo.Txt': (req, res) => {
      return 'bar';
    }
  }
})
