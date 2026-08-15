$dirs = @(
    "C:\Users\keilu\OneDrive\Desktop\keilu\stickers\empresa",
    "C:\Users\keilu\OneDrive\Desktop\keilu\stickers\acciones empresas"
)

foreach ($base in $dirs) {
    if (-not (Test-Path $base)) { continue }
    $subdirs = Get-ChildItem -Path $base -Directory
    foreach ($sub in $subdirs) {
        $files = Get-ChildItem -Path $sub.FullName -File | Where-Object { $_.Extension -match "\.(gif|png|jpg|jpeg)$" }
        Write-Output "$($sub.Parent.Name)/$($sub.Name): $($files.Count)"
    }
}
