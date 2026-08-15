# Script to rename company and company action stickers to sequential names (00-default.gif, 01.gif, 02.gif, etc.)
$targets = @(
    "C:\Users\keilu\OneDrive\Desktop\keilu\stickers\empresa",
    "C:\Users\keilu\OneDrive\Desktop\keilu\stickers\acciones empresas"
)

foreach ($target in $targets) {
    if (-not (Test-Path $target)) {
        Write-Output "Path $target does not exist. Skipping."
        continue
    }
    
    $subdirs = Get-ChildItem -Path $target -Directory
    foreach ($dir in $subdirs) {
        Write-Output "Processing folder: $($dir.FullName)"
        
        # Get all image/gif files
        $files = Get-ChildItem -Path $dir.FullName -File | Where-Object { $_.Extension -match "\.(gif|png|jpg|jpeg)$" } | Sort-Object -Property Name
        
        if ($files.Count -eq 0) {
            Write-Output "No image files found in $($dir.Name). Skipping."
            continue
        }
        
        # 1. Rename to temporary names to avoid name collision
        $tempNames = @()
        for ($i = 0; $i -lt $files.Count; $i++) {
            $file = $files[$i]
            $tempName = "temp_rename_$($i)$($file.Extension)"
            $tempPath = Join-Path $dir.FullName $tempName
            Rename-Item -Path $file.FullName -NewName $tempName -Force
            $tempNames += [PSCustomObject]@{
                Path = $tempPath
                Index = $i
                Extension = $file.Extension
            }
        }
        
        # 2. Rename from temporary names to final names (00-default.ext, 01.ext, 02.ext, etc.)
        foreach ($tempFile in $tempNames) {
            $finalName = ""
            if ($tempFile.Index -eq 0) {
                $finalName = "00-default$($tempFile.Extension)"
            } else {
                $formattedIdx = ($tempFile.Index).ToString("00")
                $finalName = "$($formattedIdx)$($tempFile.Extension)"
            }
            
            Rename-Item -Path $tempFile.Path -NewName $finalName -Force
        }
        Write-Output "Successfully renamed $($files.Count) files in $($dir.Name)."
    }
}
