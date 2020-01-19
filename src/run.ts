import { exec, ExecException, ExecOptions } from 'child_process'

function run(cmd: string, options?: ExecOptions) {
  return new Promise((resolve, reject) => {
    exec(cmd, options, (error: ExecException | null, stdout: string, stderr: string) => {
      if (error) return reject(new Error(`${cmd} errors, code: ${error.code}`))
      if (stdout) return resolve(stdout)
    })
  })
}

export { run }
