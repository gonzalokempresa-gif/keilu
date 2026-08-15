$port = 8080
$endpoint = New-Object System.Net.IPEndPoint ([System.Net.IPAddress]::Any, $port)
$listener = New-Object System.Net.Sockets.TcpListener $endpoint
$listener.Start()
Write-Host "Servidor Web local activo en puerto $port"

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css"
    ".js"   = "application/javascript"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".json" = "application/json"
}

while ($true) {
    try {
        $client = $listener.AcceptTcpClient()
        $stream = $client.GetStream()
        $reader = New-Object System.IO.StreamReader $stream
        $line = $reader.ReadLine()
        
        if ($line) {
            $parts = $line.Split(' ')
            if ($parts.Length -ge 2) {
                $rawPath = $parts[1]
                if ($rawPath.Contains('?')) { $rawPath = $rawPath.Substring(0, $rawPath.IndexOf('?')) }
                $path = [System.Uri]::UnescapeDataString($rawPath)
                if ($path -eq '/' -or $path -eq '') { $path = '/profile_view_worker.html' }
                
                $file = Join-Path $PSScriptRoot $path.TrimStart('/')
                if (Test-Path $file -PathType Leaf) {
                    $ext = [System.IO.Path]::GetExtension($file).ToLower()
                    $ct = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "text/plain" }
                    $bytes = [System.IO.File]::ReadAllBytes($file)
                    $header = "HTTP/1.1 200 OK`r`nContent-Type: $ct`r`nContent-Length: $($bytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                    $hBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                    $stream.Write($hBytes, 0, $hBytes.Length)
                    $stream.Write($bytes, 0, $bytes.Length)
                } else {
                    $msg = "404 Not Found"
                    $b = [System.Text.Encoding]::UTF8.GetBytes($msg)
                    $h = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain`r`nContent-Length: $($b.Length)`r`nConnection: close`r`n`r`n"
                    $hb = [System.Text.Encoding]::UTF8.GetBytes($h)
                    $stream.Write($hb, 0, $hb.Length)
                    $stream.Write($b, 0, $b.Length)
                }
            }
        }
        $stream.Close()
        $client.Close()
    } catch {
        # ignore request error
    }
}
